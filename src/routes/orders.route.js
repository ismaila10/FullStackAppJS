const express = require("express");
const router = express.Router();
const orders = require('../controllers/orders.controller');

router.post('/createOrder', orders.createOrder);
router.get('/getOrder/:id', orders.getOrder);
router.get('/getOrders', orders.getOrders);

module.exports = router;