require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const Product = require('./models/productModel');



const app = express();

// Middleware to parse JSON
app.use(express.json());

//Thisra test

const productRoute= require("./Routes/productRoute");



app.use("/product",productRoute);




mongoose.connect(process.env.DATABASE_CONNECTION_URL)
.then(()=>{
    app.listen(3000,()=>{
        console.log("API app runing on port 3000")
    })
    console.log('Connected to the MongoDB')
}).catch((error)=>{
    console.log('error')
})