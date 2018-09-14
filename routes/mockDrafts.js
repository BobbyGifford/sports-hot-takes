const express = require('express');
const router = express.Router();
const requireLogin = require('../middleware/requireLogin');

// MockDraft Model
const MockDraft = require('../models/MockDraft');

// Route    GET api/mockdraft
// Desc     Fetches all mockdrafts
// Access   Private

router.get('/', requireLogin, (req, res) => {
  MockDraft.find()
    .sort({ version: -1 })
    .then(mockdrafts => {
      res.json(mockdrafts);
    })
    .catch(err => {
      res.json({ err });
    });
});

// Route    GET api/mockdraft/:sport
// Desc     Fetches all mockdrafts by a type of sport
// Access   Private

router.get('/:sport', requireLogin, (req, res) => {
  MockDraft.find({ sport: req.params.sport })
    .sort({ version: -1 })
    .then(mockdrafts => {
      res.json(mockdrafts);
    })
    .catch(err => {
      res.json({ err });
    });
});

router.get('/:sport/:version', requireLogin, (req, res) => {
  MockDraft.find({ sport: req.params.sport, version: req.params.version })
    .then(mockdrafts => {
      res.json(mockdrafts);
    })
    .catch(err => {
      res.json({ err });
    });
});

module.exports = router;
