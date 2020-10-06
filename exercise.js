const  mongoose  = require('mongoose');
const express = require('express');
const exercise = express();

mongoose.connect(process.env.MONGO_DB,{ useNewUrlParser: true, useUnifiedTopology: true });



module.exports = exercise;

