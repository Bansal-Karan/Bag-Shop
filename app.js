const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");
const userRouts = require("./routers/userRouts");
const ownerRouts = require("./routers/ownerRouts");
const productRouts = require("./routers/productRouts");

const db = require("./config/mongoose-connect");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));

app.use("/users",userRouts);
app.use("/owner",ownerRouts);
app.use("/product",productRouts);

app.listen(3000)