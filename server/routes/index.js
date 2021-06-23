const express = require('express');
const router = express.Router();
const users = require('../routes/users');
const admin = require('../routes/admin');
const merchants = require('../routes/merchants');
const products = require('../routes/products');
const { checkJWT, isAdmin } = require('../controller/securityController');

router.use('/users', users);
router.use('/admin', checkJWT, isAdmin, admin);
router.use('/merchants', merchants);
router.use('/products', products);

module.exports = router;
