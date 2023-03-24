//connect our config.env
require('dotenv').config({path: './config.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const errorHandler = require('./middleware/error');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//connect our database
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology:true}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
});

const port = process.env.PORT || 4242;

//connect our routes and handle any errors
app.use('api/auth', require('./routes/auth'));
app.use(errorHandler);

//Print to the console the port number 
app.listen(port, () => { console.log('Server is running on port ' + port )});   