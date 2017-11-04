const Poll = require('../models/poll');

exports.authPoll = (req, res, next) => {

  const pollId = req.params.pollId;
  Poll
  .findById(pollId)
  .exec()
  .then(pollDoc => {
    req.currentPoll = pollDoc;
    if (pollDoc && req.user && pollDoc._user.equals(req.user._id)) {
      req.currentUser = true;
      // res.status(422).send({'error': 'You are not the author'});
    } else {
      req.currentUser = false;
    }
    next();
  })
};