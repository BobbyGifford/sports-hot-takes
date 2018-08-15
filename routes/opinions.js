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
    .then(opinions => {
      if (!opinions) {
        res.status(404).json({ message: 'No opinions found' });
      }
      res.status(200).json(opinions);
    });
});

// Route    GET api/opinions/:id
// Desc     Fetches single opinion
// Access   Private

router.get('/:id', requireLogin, (req, res) => {
  Opinion.findById(req.params.id)
    .populate('user', ['displayName', 'googleImg'])
    .populate('comments.user', ['displayName', 'googleImg'])
    .then(opinion => {
      res.json(opinion);
    })
    .catch(error => res.status(404).json({ notfound: 'No opinions' }));
});

// Route    Delete api/opinions/:id
// Desc     Deletes single opinion
// Access   Private

router.delete('/:id', requireLogin, (req, res) => {
  Opinion.findById(req.params.id)
    .then(opinion => {
      // Checks opinion author
      if (opinion.user.toString() !== req.user.id) {
        res
          .status(401)
          .json({ Unauthorized: "You're not the author of this opinion" });
      }
    //   Successfully deleted
      opinion.remove().then(() => {
        res.json({ message: 'Opinion removed' });
      });
    })
    // Can't find opinion
    .catch(error => {
      res.json({ error: 'No opinion found' });
    });
});

// Route    POST /api/opinions/like/:id
// Desc     Like opinion
// Access   Private

router.post('/like/:id', requireLogin, (req, res) => {
  Opinion.findById(req.params.id)
    .then(opinion => {
      if (
        opinion.likes.filter(like => like.user.toString() === req.user.id)
          .length > 0
      ) {
        return res
          .status(400)
          .json({ alreadyliked: 'User already liked this opinion' });
      }

      // Add user id to likes array
      opinion.likes.unshift({ user: req.user.id });

      opinion.save().then(opinion => res.json(opinion));
    })
    .catch(err => res.status(404).json({ opinionnotfound: 'No opinion found' }));
})

// Route    POST /api/opinions/like/:id
// Desc     Unlike opinion
// Access   Private

router.delete('/like/:id', requireLogin, (req, res) => {
  Opinion.findById(req.params.id)
    .then(opinion => {
      if (
        opinion.likes.filter(like => like.user.toString() === req.user.id)
          .length === 0
      ) {
        return res
          .status(400)
          .json({ notliked: 'You have not yet liked this opinion' });
      }

      // Get remove index
      const removeIndex = opinion.likes
        .map(item => item.user.toString())
        .indexOf(req.user.id);

      // Splice out of array
      opinion.likes.splice(removeIndex, 1);

      // Save
      opinion.save().then(opinion => res.json(opinion));
    })
    .catch(err => res.status(404).json({ opinionnotfound: 'No opinion found' }));
});


module.exports = router;
