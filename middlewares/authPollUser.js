const Poll = require('../models/poll');

exports.authPoll = (req, res, next) => {
  if(!req.user) {
    res.status(401).send({'error': 'Unauthorized'});
  }
  const pollId = req.params.pollId;
  Poll
  .findById(pollId)
  .exec()
  .then(pollDoc => {
    // console.log('equal:', pollDoc._user.equals(req.user._id));
    if (!pollDoc || !pollDoc._user.equals(req.user._id)) {
      res.status(422).send({'error': 'You are not the author'});
    } else {
      next();
    }
  })
};