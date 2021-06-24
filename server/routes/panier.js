const express = require('express');
const router = express.Router();
const { fetchProductsPanierByUserId, SaveProductsPanier } = require('../controller/panierController');

router.get('/:id', fetchProductsPanierByUserId);
router.post('/', SaveProductsPanier);

module.exports = router;
