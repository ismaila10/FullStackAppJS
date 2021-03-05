const express = require("express");
const router = express.Router();
const products = require('../controllers/products.controller');
//const verifyToken = require('../middlewares/verifyToken');

import verifyToken from "../middlewares/verifyToken";

router.post('/created', products.created);

module.exports = router;