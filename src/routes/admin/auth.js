const express = require('express');
const { signup, signin, signout } = require('../../controllers/admin/auth');
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require('../../validators/auth');
const { requiredSignin } = require('../../common-middleware');
const router = express.Router();

router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup)

router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin)

router.post('/admin/signout', requiredSignin, signout)

module.exports = router;