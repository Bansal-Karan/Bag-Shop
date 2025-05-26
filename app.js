const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");
const indexRouts = require("./routers/index");
const userRouts = require("./routers/userRouts");
const ownerRouts = require("./routers/ownerRouts");
const productRouts = require("./routers/productRouts");
const expressSession = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();

const db = require("./config/mongoose-connection"); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.JWT_KEY,
    })
);

app.use(flash());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.use("/", indexRouts)
app.use("/users",userRouts);
app.use("/owners",ownerRouts);
app.use("/products",productRouts);

app.listen(3000, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
    } else {
        console.log("Server running on http://localhost:3000");
    }
});
