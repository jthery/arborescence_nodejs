// Express router
var express = require('express');
var router = express.Router();


// Controller declaration
const PostController = require('../controllers/post.controller.js');

//GET POSTS
router.get('/posts', PostController.getPosts);

// Export routes
module.exports = router;    