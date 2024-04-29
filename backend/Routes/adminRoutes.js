

const express = require('express');
const {addNewProductData,createCategory,deleteCategory,createPlatForm,deletePlatform} = require('../Controller/adminController');
const routes = express.Router();
routes.post('/addNewProduct' , addNewProductData);
// routes.get('/EditProduct:id' , addNewProductData);
// routes.get('/deleteProduct:id' , addNewProductData);
routes.post('/createCategory' , createCategory);
// routes.post('/createCatagory' , createCategory);
// routes.get('/deleteCategory' , deleteCategory);
routes.post('/createPlatForm' , createPlatForm);
// routes.get('/deletePlatform' , deletePlatform);

module.exports = routes;