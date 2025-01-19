const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/miniproject');

const userSchema = mongoose.Schema({
    Fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    conatct: Number,
    picture: String,
})

module.exports = mongoose.model('user', userSchema);