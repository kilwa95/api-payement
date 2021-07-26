const express = require('express');
const router = express.Router();
const { FetchCredentials , SaveCredentials} = require('../controller/platformController');


router.get('/credentials', FetchCredentials);
router.post('/credentials', SaveCredentials);

module.exports = router;
