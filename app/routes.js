
const handlers = require('./handlers');
const ExampleRoute = require('./routes/ExampleRoute');

module.exports = (app) => {
  app.use(`${process.env.URL_PREFIX}`, ExampleRoute);

  /**
  * Error handling
  */
  app.use(handlers);

  // assume 404 since no middleware responded
  app.use((req, res) => {
    res.status(404).json({
      error: 404,
      description: 'Not found',
      url: req.originalUrl,
    });
  });
};
