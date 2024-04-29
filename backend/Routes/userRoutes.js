
const express = require('express');
const {loginUser,fetchAllProducts,fetchCategories,fetchPlatforms} = require('../Controller/userController')
const router = express.Router();

router.get('/login' , loginUser);
router.get('/products' , fetchAllProducts);
router.get('/fetchCategories' , fetchCategories);
router.get('/fetchPlatforms' , fetchPlatforms);


module.exports = router;
