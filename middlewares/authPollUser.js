const Poll = require('../models/poll');

exports.authPoll = (req, res, next) => {
  if(!req.user) {
    res.status(422).send({'error': 'Anauthorized'});
  }
  const pollId = req.params.pollId;
  Poll
  .findById(pollId)
  .exec()
  .then(pollDoc => {
    if (pollDoc._user !== req.user._id) {
      res.status(422).send({'error': 'You are not the author'});
    } else {
      next();
    }
  })
};