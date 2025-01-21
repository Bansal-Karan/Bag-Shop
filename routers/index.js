const express = require("express");
const router = express.router();
const isLoggedin = require("../middlewares/isLoggedIn");

router.get("/", (req, res) => {
    let error = req.flash("error");
    resres.render("index", {error});
});

router.get("/shop", isLoggedin, function(res,req){
    res.render("shop");
});

module.exports = router;