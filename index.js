const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT)