const mongoose = require('mongoose');
const { Schema } = mongoose;

const voteSchema = new Schema({
  vote_user: { type: Schema.Types.ObjectId, ref: 'user' },
  vote_ip: String,
  respond: { type: String, default: '' },
  _poll: { type: Schema.Types.ObjectId, ref: 'poll' }
});

const VoteClass = mongoose.model('vote', voteSchema);

module.exports = VoteClass;
