const express = require('express');
const router = express.Router();
const users = require('../routes/users');
const merchants = require('../routes/merchants');
const { checkJWT, isAdmin } = require('../controller/securityController');

router.use('/users', users);
router.use('/merchants', checkJWT, isAdmin, merchants);

module.exports = router;
