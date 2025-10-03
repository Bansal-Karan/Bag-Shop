const express = require("express");
const router = express.Router();
const {registerOwner,loginOwner} = require("../controller/authController");
const productModel = require("../models/productModel");

router.get("/admin", async (req, res) => {
    let success = req.flash("success");
    try {
        const products = await productModel.find();
        res.render("admin", { success, products });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error loading admin page");
    }
});


router.post("/create", registerOwner);
router.post("/ologin",loginOwner);
module.exports = router;