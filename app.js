const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const app = express();
// import './config/database';
// import middlewareConfig from './config/middleware';
// DB Setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {useMongoClient: true});
// App Setup
app.use(morgan('combined'));
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use('/api',authRouter);

// express.use(static)
// middlewareConfig(app);

module.exports =  app;