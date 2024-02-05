const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// Write GET endpoint for sending product to the client here
// Endpoint - /api/v1/products/:name/:price
app.use('/api/v1/products/:name/:price',(req,res)=>{

    let {name,price} = req.params;
    price = price*1;
    const availableProduct = products.find(val => {return val.name === name && val.price === price})
    if(!availableProduct){
        return res.status(404).send({
            message: 'Product not found!',
            status: 'failed',
            
        })
    }
    return res.status(200).send({
        status: 'success',
        message: 'Product fetched successfully',
        data:{availableProduct}
    })
})

module.exports = app;
