const mongoose = require('mongoose');
const Poll = require('./models/poll');
const Vote = require('./models/vote');
const pollId = '59fad31f84822a25445f8704';
const candidates = ['candidate31','candidate32','candidate33'];
const ObjectId = mongoose.Types.ObjectId;
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
    console.log('voteDoc:', voteDoc);
    let vote = {};
    voteDoc.forEach(singleVote => vote[singleVote._id] = singleVote.number);
    console.log('voteDefault:', voteDefault);
    vote = {...voteDefault, ...vote};
    console.log('vote:', vote);
    return vote;
  })
  .catch(err => {
    console.log('err:', err);
  })
};

getVotes(pollId, candidates);