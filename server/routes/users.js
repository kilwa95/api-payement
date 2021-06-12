const express = require('express');
const router = express.Router();
const { fetchUsers, saveUsers, auth, checkJWT } = require('../controller/userController');

router.get('/', checkJWT, fetchUsers);
router.post('/', saveUsers);
router.post('/login', auth);

module.exports = router;
