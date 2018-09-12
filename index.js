const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./services/passport');
const opinion = require('./routes/opinions');
const mockDrafts = require('./routes/mockDrafts');

const app = express();

// Middleware
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./routes/authRoutes')(app);
app.use('/api/opinions', opinion);
app.use('/api/mockdraft', mockDrafts);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  `Server running on: ${PORT}`;
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
