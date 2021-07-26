const express = require('express');
const router = express.Router();
const { auth , isAdmin , checkJWT} = require('../controller/securityController');
const users = require('../routes/users');
const merchants = require('../routes/merchants');
const commandes = require('../routes/commandes');
const platform = require('../routes/platform');
const products = require('../routes/products');


router.use('/login', auth);
router.use('/users', users);
router.use('/merchants', merchants);
router.use('/products', products);
router.use('/commandes', commandes);
router.use('/platform',checkJWT, isAdmin, platform);


module.exports = router;
