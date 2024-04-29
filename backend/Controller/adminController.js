const Category = require('../Models/CategoryModel');
const Platform = require('../Models/PlatformModel');
const Product = require('../Models/ProductModel');

const addNewProductData = async(req,res,next) => {
    const {name, category , allPlatforms, imageUrl} = req.body;

    try{
         await Product.create({
         name : name,
         category : category,
         allPlatforms : allPlatforms,
         imageUrl : imageUrl
        })

        res.json({
            message : "Product Created Successfully"
        })
    }catch{(err) => {
        next(err);
    }     
    }
}

const createCategory = async(req,res,next) => {

    const {name}  = req.body;

    try{
       await Category.create({name : name});

       res.json({
        message : "Category Created Successfully"
       })
    }catch{
        next(err);
    }


}

const deleteCategory = (req,res,next) => {

    const id = req.query;

    console.log(id);


}

const createPlatForm = async(req,res,next) => {
    const {name}  = req.body;

    try{
       await Platform.create({name : name});

       res.json({
        message : "Platform Created Successfully"
       })
    }catch{
        next(err);
    }
}

const deletePlatform = () => {

}

module.exports = {addNewProductData,createCategory , deleteCategory , createPlatForm , deletePlatform};