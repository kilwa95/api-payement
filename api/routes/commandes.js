const express = require('express');
const router = express.Router();
const { SaveCommande, FetchCommandes, updateCommandeStatus } = require('../controller/CommandeController');

router.post('/', SaveCommande);
router.get('/', FetchCommandes);
router.put('/:id/', updateCommandeStatus);

module.exports = router;
