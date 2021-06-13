const express = require('express');
const router = express.Router();
const users = require('../routes/users');
const merchants = require('../routes/merchants');

router.use('/users', users);
router.use('/merchants', merchants);

module.exports = router;
