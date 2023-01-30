const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');
const PostModel = require('../../models/Post.model');
const ProfileModel = require('../../models/Profile.model');
const UserModel = require('../../models/User.model');

// @route     GET api/posts
// @desc      Get all posts
// @access    Private

router.get('/', auth, async (req, res) => {
 try {
  const posts = await PostModel.find().sort({ createdAt: -1 });
  res.json(posts);
 } catch (error) {
  console.error(error.message);
  res.status(500).json('Server Error: ' + error.message);
 }
});

// @route     GET api/posts/:id
// @desc      Get post by Id
// @access    Private

router.get('/:id', auth, async (req, res) => {
 try {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
   return res.status(404).json({ msg: 'Post not found' });
  }
  res.json(post);
 } catch (error) {
  console.error(error.message);
  if (error.kind === 'ObjectId') {
   return res.status(404).json({ msg: 'Post Not Found' });
  }
  res.status(500).json('Server Error: ' + error.message);
 }
});

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

// @route     DELETE api/posts/:id
// @desc      DELETE user post
// @access    private

router.delete('/:id', auth, async (req, res) => {
 try {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
   return res.status(404).json({ msg: 'Post not found' });
  }
  if (post.user.toString() !== req.user.id) {
   return res.status(401).json({ msg: 'Not Authorized' });
  }
  await post.remove();
  res.json({ msg: 'Post removed', post: post });
 } catch (error) {
  console.error(error.message);
  if (error.kind === 'ObjectId') {
   return res.status(404).json({ msg: 'There is no such post' });
  }
  res.status(500).send('Server Error');
 }
});

module.exports = router;
