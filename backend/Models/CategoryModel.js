



const mongoose = require('mongoose');


const categorySchema = mongoose.Schema({
    name : {
        type : String,
        require: true,
    },
    offer : {
        type : String,
        default : ''
    }
})


const Category = mongoose.model('Category' , categorySchema);

module.exports = Category;