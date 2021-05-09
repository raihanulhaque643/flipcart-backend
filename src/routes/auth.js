const express = require('express');
const { signup, signin, requiredSignin } = require('../controllers/auth');
const router = express.Router();
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require('../validators/auth')

router.post('/signup',validateSignupRequest, isRequestValidated, signup)

router.post('/signin', validateSigninRequest, isRequestValidated, signin)

module.exports = router;