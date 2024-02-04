const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// Write GET endpoint for sending product to the client here
// Endpoint - /api/v1/products/:name/:price
// app.use('//api/v1/products/:name/:price',(req,res)=>{
//     console.log(req.params.name);
//     console.log(req.params.price);

//     const availableProduct = products.find(val => req.params.name == val.name)
//     if(!availableProduct){
//         return res.status(400).send({
//             status: 'failure',
//             message: 'Product not found!'
//         })
//     }
//     return res.status(200).send({
//         status: 'success',
//         message: 'Product fetched successfully',
//         data:{'product':availableProduct}
//     })
// })
app.get('/api/v1/products', (req,res) => {
    res.status(200).json({
    status:'Success',
    message:'Details of products fetched successfully',
    data:{
        products
    }
});
});

module.exports = app;
