const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();
router.get('/users', userController);

module.exports = router;