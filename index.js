const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./services/passport");

const app = express();

// Middleware
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })


app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );
  
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use(passport.session());

  require("./routes/authRoutes")(app)
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    `Server running on: ${PORT}`
})
