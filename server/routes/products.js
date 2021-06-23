const express = require('express');
const router = express.Router();
const { fetchProducts, SaveProduct } = require('../controller/productController');

router.get('/', fetchProducts);
router.post('/', SaveProduct);

module.exports = router;
