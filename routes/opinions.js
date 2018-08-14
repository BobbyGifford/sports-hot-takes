const express = require('express');
const router = express.Router();
const requireLogin = require('../middleware/requireLogin');

// Opinion Model
const Opinion = require('../models/Opinion');

// Route    POST api/opinions
// Desc     Creates an opinion
// Access   Private

router.post('/', requireLogin, (req, res) => {
  const newOpinion = {};

  newOpinion.user = req.user.id;
  if (req.body.claim) newOpinion.claim = req.body.claim;
  if (req.body.sport) newOpinion.sport = req.body.sport;
  if (req.body.description) newOpinion.description = req.body.description;
  if (req.body.image) newOpinion.image = req.body.image;

  new Opinion(newOpinion).save().then(profile => {
    res.json(profile);
  });
});

// Route    GET api/opinions
// Desc     Fetches all opinions
// Access   Private

router.get('/', requireLogin, (req, res) => {
  Opinion.find()
    .populate('user', ['displayName', 'googleImg'])
    .sort({ date: -1 })
    .then((opinions) => {
        if (!opinions) {
            res.status(404).json({ message: "No opinions found"})
        }
        res.status(200).json(opinions)
    })
});

module.exports = router;
