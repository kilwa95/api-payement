const express = require('express');
const router = express.Router();
const { SaveMerchant, fetchMerchants, UpdateMerchant } = require('../controller/merchantController');

router.get('/', fetchMerchants);
router.post('/', SaveMerchant);
router.put('/:id', UpdateMerchant);

module.exports = router;
