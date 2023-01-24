const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const UserModel = require('../../models/User.model');

// @route     Get api/auth
// @desc      Test Route
// @access    Public
router.get('/', auth, async (req, res) => {
 try {
  const user = await UserModel.findById(req.user.id).select('-password');
  res.json(user);
 } catch (error) {
  console.error(error.message);
  res.status(500).send('Server Error');
 }
});

module.exports = router;
