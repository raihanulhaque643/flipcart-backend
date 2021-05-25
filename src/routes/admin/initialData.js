const express = require('express');
const { initialData } = require('../../controllers/admin/initialData');
const { requiredSignin, adminMiddleware } = require('../../common-middleware');
const router = express.Router();

router.post('/initialdata', requiredSignin, adminMiddleware, initialData);

module.exports = router;