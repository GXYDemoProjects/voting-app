import express from 'express';
import './config/database';
import middlewareConfig from './config/middleware';

const app = express();
middlewareConfig(app);

module.exports =  app;