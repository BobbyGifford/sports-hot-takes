const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");


const app = express();

// Middleware
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

const PORT = process.env.PORT || 5000;
app.listen(PORT)