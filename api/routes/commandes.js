const express = require('express');
const router = express.Router();
const { SaveCommande , FetchCommandes , UpdateCompanyStatus , UpdateCompanyStatusValid , UpdateCompanyStatusAnnulation, UpdateCompanyStatusConfirmation} = require('../controller/CommandeController');

router.post('/', SaveCommande);
router.get('/', FetchCommandes);
router.post('/:id/remboursement', UpdateCompanyStatus);
router.post('/:id/validation', UpdateCompanyStatusValid);
router.post('/:id/annulation', UpdateCompanyStatusAnnulation);
router.post('/:id/confirmation', UpdateCompanyStatusConfirmation);

module.exports = router;
