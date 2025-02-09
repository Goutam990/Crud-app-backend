const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product  = require('./models/product.model.js') 
const productRoutes = require('./routes/Product.routes.js');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
    res.send('Hello From Node API Server Updated    ');
});

app.get('/api/product/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product); 
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

mongoose.connect('mongodb+srv://tiwarigoutam8:eAH3bu640aiYDz8I@backenddb.y9kvs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to database');
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
})
.catch(() => {
        console.log('Connection failed!');
    });