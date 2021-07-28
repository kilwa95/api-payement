const express = require('express');
const router = express.Router();
const { SaveMerchant } = require('../controller/merchantController');

router.post('/', SaveMerchant);

module.exports = router;
