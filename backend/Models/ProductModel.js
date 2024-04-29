

const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name : {
        type : String,
        require: true,
    },
    category : {
        type : String,
        require: true,
    },
    allPlatforms : {
        type : Array,
        require: true,
    },
    imageUrl : {
        type : String,
        require : true
    },
})


const Product = mongoose.model('Product' , productSchema);

module.exports = Product;