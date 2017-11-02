const Poll = require('../models/poll');
const Vote = require('../models/vote');

// const singlePollData = (doc, user) => {
//   console.log('doc:', doc);
//   const arrVotes = [['candidate', 'number']];
//   const votes = {};
//   doc.recipients.forEach(recipient => {
//     votes[recipient.respond] = (votes[doc.respond] || 0) + 1;
//   });
//   for(let item of votes) {
//     console.log('item:', item);
//     arrVotes.push([item, votes[item]]);
//   }
//   const { _id, title, description } = doc;
//   const res = {
//     pollId: _id,
//     title,
//     description,
//     data: arrVotes,
//     currentUser: !!user
//   };
//   console.log('res:', res);
//   return res;
// }

const getVotes = pollId => {
  return Vote
  .find({ _poll: pollId })
  .aggregate({ $group:{_id:"$respond", number:{$sum: 1}} })
  .exec()
  .then(voteDoc => {
    console.log('voteDoc:', voteDoc);
    return voteDoc.json();
  })
};


// new poll
// post withAuth
exports.newpoll = (req, res, next) => {
  console.log('req.user:', req.user);
  if(!req.user) {
    return res.status(401).send({error: 'Unauthorized'});
  }
  const { title, description, candidates } = req.body;
  console.log('title, description, candidates:', title, description, candidates);
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
exports.singlepoll = async (req, res, next) => {
  const pollId = req.params.pollId;
  const user = req.user;
  let singlePollData = {currentUser: !!user};
  Poll
  .findById(pollId)
  .select('_id title description')
  .exec()
  .then(pollDoc => {
    console.log('pollDoc:', pollDoc);
    singlePollData = {
      ...singlePollData, 
      pollId: pollDoc.id,
      title : pollDoc.title,
      description : pollDoc.description
    };
    return getVotes(pollId);
  })
  .then(votes => {
    singlePollData.data = votes;
    res.json(singlePollData);
  })
  .catch(err => res.status(422).send(err));
};

// get my polls withAuth
exports.mypolls = (req, res, next) => {
  if(!req.user) {
    return res.status(422).send({error: 'Unauthorized'});
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
  const value = req.params.value;
  let singlePollData = {currentUser: !!user};
  if(!req.user && !ip) {
    return res.status(422).send({error: 'Unauthorized'});
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
        .then(() => getVotes(pollId))
        .then(votes => {
          singlePollData.data = votes;
          res.json(singlePollData);
        })
        .catch(err => res.status(422).send(err));
      })
    } else if(ip) {
      Vote
      .findOne({_poll : pollId, vote_ip: ip})
      .then(voteDoc => {
        if(voteDoc) {
          return res.status(422).send({error: 'You have voted for this poll with this ip'});
        }
        const vote = new Vote({
          vote_user: user._id,
          respond: value,
          _poll: pollId
        });
        vote
        .save()
        .then(() => getVotes(pollId))
        .then(votes => {
          singlePollData.data = votes;
          res.json(singlePollData);
        })
        .catch(err => res.status(422).send(err));
      })
    }
  })
  .catch(err => res.status(422).send(err));

}

// delete withAuth
exports.deletePoll = (req, res, next) => {

  const pollId = req.params.pollId;
  
  Vote
  .remove({_poll:pollId})
  .exec()
  .then(() => {
    Poll
    .remove({_id: pollId})
    .exec()
    .then(() => res.json({'info':'remove sucess'}))
    .catch(err => res.status(422).send(err));
  })
  .catch(err => res.status(422).send(err));
};
