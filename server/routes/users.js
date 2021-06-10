const express = require('express');
const router = express.Router();
const { fetchUsers, saveUsers, auth } = require('../controller/userController');

router.get('/', fetchUsers);
router.post('/', saveUsers);
router.post('/login', auth);

module.exports = router;
