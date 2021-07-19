const express = require('express');
const router = express.Router();
const { fetchMerchants, ValidMerchant } = require('../controller/adminController');
const { FetchTransactions } = require('../controller/transactionController');


router.get('/merchants', fetchMerchants);
router.get('/transactions', FetchTransactions);
router.put('/merchants/valid/:id', ValidMerchant);

module.exports = router;
