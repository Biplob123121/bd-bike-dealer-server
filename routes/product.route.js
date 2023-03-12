const express = require('express');
const router = express.Router();

const { getAllProducts, getSingleProduct, addProduct, deleteProduct } = require('../controllers/product.controller');



router.get('/', getAllProducts)
router.get('/:id', getSingleProduct)
router.post('/', addProduct)
router.post('/:id', deleteProduct)


module.exports = router;