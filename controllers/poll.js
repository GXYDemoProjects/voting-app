const ObjectId = require('mongoose').Types.ObjectId;
const Poll = require('../models/poll');
const Vote = require('../models/vote');


const getVotes = (pollId, candidates) => {
  let voteDefault = {};
  candidates.forEach(candidate => voteDefault[candidate] = 0);
  return Vote
  // .find({ _poll: pollId })
  .aggregate([
    { $match: { _poll: ObjectId(pollId) } },
    { 
      $group:{_id:'$respond', number:{$sum: 1}} 
    }
  ])
  .exec()
  .then(voteDoc => {
    let tmp = {};
    
    voteDoc.forEach(singleVote => tmp[singleVote._id] = singleVote.number);
    tmp = {...voteDefault, ...tmp};
    const vote = [];
    for(let key of Object.keys(tmp)) {
      vote.push({respond:key, number:tmp[key]});
    }
    return vote;
  })
  .catch(err => {
    console.log('err:', err);
  })
};


// new poll
// post withAuth
exports.newpoll = (req, res, next) => {
  if(!req.user) {
    return res.status(401).send({error: 'Unauthorized'});
  }
  const { title, description, candidates } = req.body;
  const poll = new Poll({
    title,
    description,
    candidates,
    _user: req.user._id,
  });
  poll
  .save()
  .then(doc => res.json({pollId: doc._id}))
  .catch(err => res.status(422).send(err));
};

// get all poll, return pollId
exports.allpolls = (req, res, next) => {
  Poll
  .find({})
  .select('_id title description')
  .exec()
  .then(docs => res.json({polls: docs}))
  .catch(err => res.status(422).send(err));
};

// get single poll, return poll
// get withAuth
exports.singlepoll = (req, res, next) => {
  if(!req.currentPoll) {
    return res.status(422).send({error: 'Wrong pollId'});
  }

  const currentPoll = req.currentPoll;
  let singlePollData = {
    pollId: currentPoll._id,
    title : currentPoll.title,
    description : currentPoll.description,
    currentUser: req.currentUser
  };

  getVotes(currentPoll._id, currentPoll.candidates)
  .then(votes => {
    singlePollData.data = votes;
    res.json(singlePollData);
  })
  .catch(err => res.status(422).send(err));
};

// get my polls withAuth
exports.mypolls = (req, res, next) => {
  if(!req.user) {
    return res.status(401).send({error: 'Unauthorized'});
  }
  Poll
  .find({_user: req.user.id})
  .select('_id title description')
  .exec()
  .then(docs => res.json({polls: docs}))
  .catch(err => res.status(422).send(err));
}

// vote for single poll with ip or user
// post withAuth and pollId and value
exports.vote = (req, res, next) => {
  const pollId = req.params.pollId;
  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  const user = req.user;
  const value = req.body.voteValue;
  let singlePollData = {};
  if(!req.user && !ip) {
    return res.status(401).send({error: 'Unauthorized'});
  }
  
  Poll
  .findOne({ _id:pollId })
  .exec()
  .then(pollDoc => {
    if(!pollDoc) {
      return res.status(422).send({error: 'Do not have this poll'});
    }
    if(pollDoc.candidates.indexOf(value) === -1) {
      return res.status(422).send({error: 'Do not exist this candidate'});
    }
    singlePollData = {
      ...singlePollData, 
      pollId: pollDoc.id,
      title : pollDoc.title,
      description : pollDoc.description
    };

    if (user) {
      Vote
      .findOne({_poll : pollId, vote_user: user._id})
      .then(voteDoc => {
        if(voteDoc) {
          return res.status(422).send({error: 'You have voted for this poll as a user'});
        }
        const vote = new Vote({
          vote_user: user._id,
          respond: value,
          _poll: pollId
        });
        vote
        .save()
        .then(() => {
            getVotes(pollId, pollDoc.candidates)
            .then(votes => {
              singlePollData.data = votes;
              res.json(singlePollData);
            })
        })
      })
      .catch(err => res.status(422).send(err));
    } else if(ip) {
      Vote
      .findOne({_poll : pollId, vote_ip: ip})
      .then(voteDoc => {
        if(voteDoc) {
          return res.status(422).send({error: 'You have voted for this poll with this ip'});
        }
        const vote = new Vote({
          vote_ip: ip,
          respond: value,
          _poll: pollId
        });
        vote
        .save()
        .then(() => {
          getVotes(pollId, pollDoc.candidates)
          .then(
          votes => {
            singlePollData.data = votes;
            res.json(singlePollData);
          })
        })
      })
      .catch(err => res.status(422).send(err));
    }
  })
  .catch(err => res.status(422).send(err));

}

// delete withAuth
exports.deletePoll = (req, res, next) => {
  if(!req.currentUser) {
    return res.status(422).send({error: 'You are not the author'});
  }
  if(!req.currentPoll) {
    return res.status(422).send({error: 'Wrong pollId'});
  }
  const pollId = req.params.pollId;
  
  Vote
  .remove({_poll:pollId})
  .exec()
  .then(() => {
    Poll
    .remove({_id: pollId})
    .exec()
    .then(() => res.json({'info':'remove success'}))
    .catch(err => res.status(422).send(err));
  })
  .catch(err => res.status(422).send(err));
};
