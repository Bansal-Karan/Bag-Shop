const mongoose = require('mongoose');
const products=require("./productModel")
const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"products",
        default: []
    }],
    orders: {
        type: Array,
        ref: "products"
    },
    conatct: Number,
    picture: String,
})

module.exports = mongoose.model('user', userSchema);