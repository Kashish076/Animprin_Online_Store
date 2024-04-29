
const mongoose = require('mongoose');


const platformSchema = mongoose.Schema({
    name : {
        type : String,
        require: true,
    },
})


const Platform = mongoose.model('Platform' , platformSchema);

module.exports = Platform;