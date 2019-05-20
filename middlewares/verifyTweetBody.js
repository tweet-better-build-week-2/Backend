module.exports = (request, response, next) => {
  const { tweet } = request.body;

  if (!tweet) {
    response.status(422).json({
      message: 'Please provide a tweet you would like to be analyzed.'
    });
  } else {
    next();
  }
};
