const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolour: String,
    panelcolour: String,
    textcolour: String
})

module.exports = mongoose.model('products', productSchema);