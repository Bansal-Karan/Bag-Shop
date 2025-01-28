const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedIn");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

router.get("/",(req,res) => {
    res.render("index")
});

router.get("/owner", (req,res) => {
    res.render("owner-login")
})

router.get("/user", (req, res) => {
    let error = req.flash("error");
    res.render("user", { error, loggedin: false });
});

router.get("/admin", isLoggedin, async function (req, res) {
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("admin", { success });
});

router.get("/createproduct", async (req,res) => {
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("createproducts", {success});
})

router.get("/shop", isLoggedin, async function (req, res) {
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("shop", { products, success });
});

router.get("/cart", isLoggedin, async function (req, res) {
    let user = await userModel.findOne({ email: req.user.email }).populate("cart");

    if (!user || user.cart.length === 0) {
        req.flash("error", "Your cart is empty.");
        return res.redirect("/shop");
    }

    const bill = Number(user.cart[0].price) + 20 - Number(user.cart[0].discount);

    res.render("cart", { user, bill });
});

router.get("/addtocart/:productid", isLoggedin, async function (req, res) {
    let user = await userModel.findOne({ email: req.user.email });
    console.log(req.params.productid);
    
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success", "Added to cart");
    res.redirect("/shop");
});

router.get("/logout", isLoggedin, (req, res) => {
    res.render("shop");
});

module.exports = router;