const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownerModel");

router.get("/admin", (req, res) => {
    let success = req.flash("Success")
    res.render("admin", {success});

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