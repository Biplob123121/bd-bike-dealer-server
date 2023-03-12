const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: true
    },
    quantity: {
        type: String,
        require: true
    },
    supplier: {
        type: String,
        require: true
    },
    sEmail: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('product', productSchema)