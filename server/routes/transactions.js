const express = require('express');
const router = express.Router();
const { SaveTransaction , FetchTransactions } = require('../controller/transactionController');

router.post('/', SaveTransaction);
router.get('/', FetchTransactions);

module.exports = router;
