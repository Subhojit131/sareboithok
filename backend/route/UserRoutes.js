const express = require('express');

const {UserLogin, UserSignUp} = require('../controller/UserController');

const router = express.Router();

router.post('/login', UserLogin);
router.post('/signup', UserSignUp);

module.exports = router;