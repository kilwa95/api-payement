const express = require('express');
const router = express.Router();
const { SaveTransaction } = require('../controller/transactionController');

router.post('/', SaveTransaction);

module.exports = router;
