const express = require("express");
const router = express.Router();
const {registerOwner,loginOwner} = require("../controller/authController");

// router.get("/admin", (req, res) => {
//     let success = req.flash("Success")
//     res.render("admin", {success});

// });

router.post("/create", registerOwner);
router.post("/ologin",loginOwner);
module.exports = router;