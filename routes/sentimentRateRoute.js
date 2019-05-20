const express = require('express');
const sentimentRateRoute = express.Router();

sentimentRateRoute.post('/', async (request, response) => {
  const tweet = request.body;
  try {
    const sentimentRate = {
      sentimentRate: 5
    };
    response.status(200).json(sentimentRate);
  } catch (error) {
    response.status(500).json({
      message: 'Could not analyze tweet at this moment, please try again later.'
    });
  }
});

module.exports = sentimentRateRoute;
