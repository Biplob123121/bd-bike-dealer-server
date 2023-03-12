const express = require('express');
const router = express.Router();

const { getAllProducts, getSingleProduct, addProduct, deleteProduct, myProduct, updateProduct } = require('../controllers/product.controller');



router.get('/', getAllProducts)
router.get('/:id', getSingleProduct)
router.get('/myitem', myProduct)
router.put('/:id', updateProduct)
router.post('/', addProduct)
router.post('/:id', deleteProduct)


module.exports = router;