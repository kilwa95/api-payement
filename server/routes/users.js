const express = require('express');
const router = express.Router();
const { fetchUsers, saveUsers } = require('../controller/userController');

router.get('/', fetchUsers);
router.post('/', saveUsers);

module.exports = router;
