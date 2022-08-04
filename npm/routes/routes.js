const express = require('express');

const feedController = require('../controllers/controllers');

const router = express.Router();

// GET /feed/posts
router.get('/posts'  , feedController.getPosts);

router.get('/tmf-api/productOrderingManagement/v4/productOrder' , feedController.getOffers);



// POST /feed/post
router.post('/post', feedController.createPost);

module.exports = router;
