const express = require('express');
const { requiredSignin, adminMiddleware } = require('../common-middleware');
const { addCategory, getCategories } = require('../controllers/category');
const router = express.Router();

router.post('/category/create', requiredSignin, adminMiddleware, addCategory);

router.get('/category/getcategory', getCategories);

module.exports = router;