const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const cors = require('cors');

const carsRoute = require('./routes/cars');

app.use(bodyParser.json());
app.use(cors());
app.use('/cars', carsRoute);

app.get('/test',(req,res)=>{
    res.send("Hello API...!!")
});


mongoose.connect("mongodb://mongo:IdRviacRC5ygnGf7tOug@containers-us-west-151.railway.app:6833", ()=>{
    console.log("Database is connected")
})

app.listen(5000)



