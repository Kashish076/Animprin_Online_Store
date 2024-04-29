const express = require('express')
const apiRoutes =  require('./Routes/apiRoutes');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3002;
const cors = require('cors')
const path  = require('path')
require('dotenv').config();
require('./Db')
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api' , apiRoutes);

app.use(express.static(path.join(__dirname,"./propertyRent/build")))

app.get('*', function (_,res){
    res.sendFile(path.join(__dirname, "./propertyRent/build/index.html"),function(err){ res.status(500).send(err)
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(port , () => {
    console.log('app is running onn port ', port);
})