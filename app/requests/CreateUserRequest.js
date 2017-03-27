const request = require('./request');
const message = require('../../resources/validate-message');

module.exports = (req, res, next) => {
  req.checkBody({
    username: {
      notEmpty: message.notEmpty,
    },
    password: {
      notEmpty: message.notEmpty,
    },
    type: {
      notEmpty: message.notEmpty,
    },
  });
  request(req, res, next);
};
