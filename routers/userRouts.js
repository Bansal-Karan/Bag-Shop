const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generateToken");

router.get("/", (req, res) => {
    res.send('hey its working');
});

router.post("/register", (req, res) => {
    try {
        let { fullname, email, password } = req.body;

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) { return res.send(err.message) }
                else {
                    let user = await userModel.create({
                        fullname,
                        email,
                        password: hash,
                    });
                    
                    let token = generateToken(user)
                    res.cookie("token", token)
                    res.send("user created");
                }
            })
        })
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;