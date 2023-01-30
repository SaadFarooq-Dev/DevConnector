const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');
const PostModel = require('../../models/Post.model');
const ProfileModel = require('../../models/Profile.model');
const UserModel = require('../../models/User.model');

// @route     POST api/posts
// @desc      Create a post
// @access    Private

router.post(
 '/',
 [auth, [check('text', 'Text is required').not().isEmpty()]],
 async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() });
  }
  try {
   const user = await UserModel.findById(req.user.id).select('-password');
   const newPost = new PostModel({
    text: req.body.text,
    name: user.name,
    avatar: user.avatar,
    user: req.user.id,
   });
   const post = await newPost.save();
   res.json(post);
  } catch (error) {
   console.error(error.message);
   res.status(500).json('Server Error: ' + error.message);
  }
 }
);

module.exports = router;
