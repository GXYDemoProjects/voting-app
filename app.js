const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const app = express();
// import './config/database'; import middlewareConfig from
// './config/middleware'; DB Setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {useMongoClient: true});

// App Setup
app.use(morgan('combined'));
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());
app.use('/api', router);

// serve for production
console.log('process.env.NODE_ENV:', 's'+process.env.NODE_ENV+'s');
// if (process.env.NODE_ENV === 'production') {
if (process.env.NODE_ENV.startsWith('production')) {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  const path = require('path');
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

module.exports = app;