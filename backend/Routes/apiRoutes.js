const userRoutes  = require('../Routes/userRoutes');
const adminRoutes = require('../Routes/adminRoutes')
const express = require('express');
const app = express();
app.use('/apiRoutes', userRoutes);
app.use('/admin' , adminRoutes);

module.exports = app;