const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const UserModel = require('../../models/User.model');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const {ClientSession} = require('mongoose');

// @route     POST api/users
// @desc      Register Route
// @access    Public
router.post(
 '/',
 [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email address').isEmail(),
  check(
   'password',
   'Please enter a password in range of 6 to 100 characters'
  ).isLength({ min: 6, max: 100 }),
 ],
 async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
   let user = await UserModel.findOne({ email });
   if (user) {
    return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
   }
   const avatar = gravatar.url(email, {
    s: '200',
    r: 'pg',
    d: 'mm',
   });
   user = new UserModel({ name, email, avatar, password });
   const salt = await bcrypt.genSalt(10);
   user.password = await bcrypt.hash(password, salt);

   const payload = {
    user: {
     id: user.id,
    },
   };

   jwt.sign(
    payload,
    config.get('jwtSecret'),
    { expiresIn: 3600 },
    async (err, token) => {
     if (err) throw err;
     await user.save();
     res.json({ token });
    }
   );
  } catch (error) {
   console.error(error.message);
   res.status(500).send('Server Error');
  }
 }
);

module.exports = router;
