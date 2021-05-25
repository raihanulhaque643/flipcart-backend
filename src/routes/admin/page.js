const express = require('express');
const { upload, requiredSignin, adminMiddleware } = require('../../common-middleware');
const { createPage } = require('../../controllers/admin/page');
const router = express.Router();

router.post('/page/create', requiredSignin, adminMiddleware, upload.fields([
    { name: 'banners'},
    { name: 'products' }
]), createPage);

module.exports = router;