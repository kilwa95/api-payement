const express = require('express');
const router = express.Router();
const users = require('../routes/users');
const admin = require('../routes/admin');
const panier = require('../routes/panier');
const merchants = require('../routes/merchants');
const products = require('../routes/products');
const { checkJWT, isAdmin } = require('../controller/securityController');

router.use('/users', users);
router.use('/panier', panier);
router.use('/admin', admin);
router.use('/merchants', merchants);
router.use('/products', products);

module.exports = router;
