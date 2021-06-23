const express = require('express');
const router = express.Router();
const { fetchMerchants, ValidMerchant } = require('../controller/adminController');

router.get('/merchants', fetchMerchants);
router.put('/merchants/valid/:id', ValidMerchant);

module.exports = router;
