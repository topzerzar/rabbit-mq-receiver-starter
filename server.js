require('dotenv').config();
const express = require('express');
// const subscribe = require('./app/libraries');

const task = process.env.NODE_ENV || 'development';
const port = process.env.NODE_PORT || 8080;
const app = express();

// Bootstrap routes
require('./config/express')(app);
require('./app/routes')(app);

// connect rabbitMQ
// subscribe.connect();

if (task !== 'test') {
  app.listen(port);
}

module.exports = app;
