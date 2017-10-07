import mongoose from 'mongoose';
import constants from './constants';
// Remove warning with Promise
mongoose.Promise = global.Promise;

console.log('MONGO_URL:', constants.MONGO_URL);
mongoose.connect(constants.MONGO_URL, {useMongoClient: true});

const db = mongoose.connection;

db.once('open', () => {
  console.log('MongoDB is connected');
}).on('error', err => {
  console.error(`Error while connecting to ${err.message}`);
  throw err;
});

export default db;
