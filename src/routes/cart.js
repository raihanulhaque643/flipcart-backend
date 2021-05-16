const express = require('express');
const { requiredSignin, userMiddleware } = require('../common-middleware');
const { addItemToCart } = require('../controllers/cart');
const router = express.Router();

router.post('/user/cart/addtocart', requiredSignin, userMiddleware, addItemToCart);

module.exports = router;