const { Router } = require('express');
const Thought = require('../models/Thought');

module.exports = Router()
  .post('/', (req, res, next) => {
    Thought
      .create(req.body)
      .then(newThought => res.send(newThought))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Thought
      .find()
      .limit(500)
      .lean()
      .then(allThoughts => res.send(allThoughts))
      .catch(next);
  })
;

