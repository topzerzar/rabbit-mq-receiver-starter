const express = require('express');
const userController = require('../controllers/ExampleController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world!!');
});

router.get('/users', userController.getUsers);

module.exports = router;
