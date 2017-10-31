import express from 'express';
// import './config/database';
// import middlewareConfig from './config/middleware';

const app = express();
console.log(process.env.NODE_ENV);
// express.use(static)
// middlewareConfig(app);

module.exports =  app;