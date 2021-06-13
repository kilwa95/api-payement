const express = require('express');
const router = express.Router();
const { SaveMerchant, fetchMerchants } = require('../controller/merchantController');

router.get('/', fetchMerchants);
router.post('/', SaveMerchant);

module.exports = router;
