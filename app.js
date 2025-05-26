// app.js
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const indexRouts = require('./routers/index');
const userRouts = require('./routers/userRouts');
const ownerRouts = require('./routers/ownerRouts');
const productRouts = require('./routers/productRouts');
const expressSession = require('express-session');
const flash = require('connect-flash');

require('dotenv').config();
require('./config/mongoose-connection'); 

const app = express();

// Body + cookies + sessions + flash
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.JWT_KEY,
}));
app.use(flash());

// Static files (served from /public automatically by Vercel)
app.use(express.static(path.join(__dirname, 'public')));

// EJS templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Your routers
app.use('/', indexRouts);
app.use('/users', userRouts);
app.use('/owners', ownerRouts);
app.use('/products', productRouts);

// Export the app — no app.listen here!
module.exports = app;
