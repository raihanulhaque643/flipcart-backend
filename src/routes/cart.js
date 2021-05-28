const express = require('express');
const { requiredSignin, userMiddleware } = require('../common-middleware');
const { addItemToCart, getCartItems } = require('../controllers/cart');
const router = express.Router();

router.post('/user/cart/addtocart', requiredSignin, userMiddleware, addItemToCart);

router.post('/user/getCartItems', requiredSignin, userMiddleware, getCartItems);

module.exports = router;