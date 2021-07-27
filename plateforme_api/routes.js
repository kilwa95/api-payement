/* eslint-disable object-curly-newline */
const express = require('express');
const { authorisationJWT, login, logout, isAuthorised, onlyAdmin } = require('./controller/securityController');
const { createOperation, getOperations, getOperation, getOperationHistory, validateOperation } = require('./controller/operationsController');
const {
  createMerchant,
  getListMerchants,
  getMarchandInformations,
  valideteAccountMarchand,
  generateNewCredentials,
} = require('./controller/merchantsController');
const {
  createUserTransaction,
  getListeTransactions,
  getTransactionInformations,
  getTransactionHistory,
} = require('./controller/transactionsController');

const router = express.Router();
router.use(express.json());


// Authentification
router.post('/login', login);
router.post('/logout', logout);

// Les Merchants
router.post('/merchants', createMerchant);
router.get('/merchants',getListMerchants); //authorisationJWT, onlyAdmin
router.get('/merchants/:mid(\\d+)', getMarchandInformations);//authorisationJWT, onlyAdmin
router.put('/merchants/:mid(\\d+)/validate', valideteAccountMarchand); //authorisationJWT, onlyAdmin
router.delete('/merchants/:mid(\\d+)/credentials', generateNewCredentials); //authorisationJWT, isAuthorised

// Les Transactions
router.post('/transactions', createUserTransaction); // authorisationJWT, isAuthorised
router.get('/transactions', getListeTransactions); //  authorisationJWT, isAuthorised
router.get('/transactions/:tid(\\d+)', authorisationJWT, isAuthorised, getTransactionInformations); // "?mid=mid"
router.get('/transactions/:tid(\\d+)/historique', authorisationJWT, isAuthorised, getTransactionHistory); // "?mid=mid"

// Les Operations
router.post('/operations', authorisationJWT, isAuthorised, createOperation); // "?mid=mid&tid=tid"
router.get('/operations', authorisationJWT, isAuthorised, getOperations); // "?mid=mid&tid=tid"
router.get('/operations/:oid(\\d+)', authorisationJWT, isAuthorised, getOperation); // "?mid=mid&tid=tid"
router.get('/operations/:oid(\\d+)/historique', authorisationJWT, isAuthorised, getOperationHistory); // "?mid=mid&tid=tid"
router.get('/operations/:oid(\\d+)/validation', validateOperation); // "?mid=mid&tid=tid"

module.exports = router;
