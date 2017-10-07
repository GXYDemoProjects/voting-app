import mongoose from 'mongoose';

const AnswerSchema = mongoose.Schema({
  answer: {
    type: String,
    unique: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

AnswerSchema.method('vote', function voting(vote, cb) {
  this.votes += 1;
  this.parent().save(cb);
});

const PollSchema = mongoose.Schema(
  {
    question: {
      type: String,
      unique: true,
    },
    answers: [AnswerSchema],
  },
	// { versionKey: false },
);

const Poll = mongoose.model('Poll', PollSchema);
export default Poll;
