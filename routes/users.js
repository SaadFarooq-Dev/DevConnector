const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

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

 (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() });
  }
  console.log(req.body);
  res.send('user Routes');
 }
);

module.exports = router;
