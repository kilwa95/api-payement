const express = require('express');
const router = express.Router();
const { fetchBooks, saveBooks } = require('../controller/bookController');

// API books
router.get('/', fetchBooks);
router.post('/', saveBooks);

module.exports = router;
