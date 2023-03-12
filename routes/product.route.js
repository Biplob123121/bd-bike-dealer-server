const express = require('express');
const router = express.Router();
const product = require('../models/product.model');


router.get('/', async (req, res) => {
    try {
        const allProducts = await product.find();
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})


module.exports = router;