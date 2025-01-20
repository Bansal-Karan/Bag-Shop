const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownerModel");

router.get("/", (req, res) => {
    res.send('hey its working');
});

router.post("/create", async(req, res) => {
    let {fullname,email,password} = req.body;
    let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
    });
    res.send(createdOwner)
});



module.exports = router;