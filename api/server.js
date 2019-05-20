const express = require('express');
const helmet = require('helmet');
const server = express();
const sentimentRateRoute = require('../routes/sentimentRateRoute');

server.use(express.json());
server.use(helmet());

server.use('/api/sentiment-rate', sentimentRateRoute);

module.exports = server;
