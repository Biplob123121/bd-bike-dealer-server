const product = require('../models/product.model')

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await product.find();
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const singleProduct = await product.findOne({ _id: id })
        res.status(200).json(singleProduct)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


const addProduct = async (req, res) => {
    try {
        const newProduct = new product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
            picture: req.body.picture,
            supplier: req.body.supplier,
            sEmail: req.body.sEmail
        })
        await newProduct.save();
        res.status(201).json({ acknowledged: true, newProduct })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await product.deleteOne({ _id: id })
        res.status(200).json({ deletedCount: 1, deletedProduct })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = { getAllProducts, getSingleProduct, addProduct, deleteProduct }