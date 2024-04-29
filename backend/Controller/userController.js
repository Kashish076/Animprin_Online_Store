const Category = require("../Models/CategoryModel");
const Platform = require("../Models/PlatformModel");
const Product = require("../Models/ProductModel");



const loginUser = () => {
    console.log('user logged in');
}

const fetchAllProducts = async(req,res,next) => {
    try{
       const data = await  Product.find();
       res.json({
            data : data
       })
    }catch(err){
        next(err);
    }
}

const fetchPlatforms = async(req,res,next) => {
    const data = await Platform.find()
    res.json({
        data : data
    })
}
const fetchCategories = async(req,res,next) => {
    const data = await Category.find()
    res.json({
        data : data
    })
}

module.exports = {loginUser,fetchAllProducts,fetchPlatforms,fetchCategories};