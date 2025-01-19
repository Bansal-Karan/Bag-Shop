const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    Fullname: String,
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    conatct: Number,
    picture: String,
})

module.exports = mongoose.model('owner', ownerSchema);