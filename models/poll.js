const mongoose = require('mongoose');
const { Schema } = mongoose;
 
const PollSchema = new Schema({
  title: String,
  description: String,
  candidates: [String],
  _user: { type: Schema.Types.ObjectId, ref: 'user' },
});

const PollClass = mongoose.model('poll', PollSchema);

module.exports = PollClass;
