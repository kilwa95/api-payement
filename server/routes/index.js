const express = require('express');
const router = express.Router();
const books = require('../routes/books');
const users = require('../routes/users');

router.use('/books', books);
router.use('/users', users);

module.exports = router;
