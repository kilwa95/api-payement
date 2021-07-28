const express = require('express');
const router = express.Router();
const { SaveCommande, FetchCommandes, FetchOneCommande, updateCommandeStatus } = require('../controller/CommandeController');

router.post('/', SaveCommande);
router.get('/', FetchCommandes);
router.get('/:id', FetchOneCommande);
router.put('/:id/', updateCommandeStatus);

module.exports = router;
