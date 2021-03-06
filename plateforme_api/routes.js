/* eslint-disable object-curly-newline */
const express = require('express');
const {
  authorisationJWT,
  login,
  logout,
  isAuthorised,
  onlyAdmin,
  getPaymentPage,
  validatePaymentPage,
  cancelPaymentPage,
} = require('./controller/securityController');
const { createOperation, validateOperation, getOperations, getOperation, updateOperation } = require('./controller/operationsController');
const { createUserTransaction, getListeTransactions, getTransactionInformations, updateTransaction } = require('./controller/transactionsController');
const {
  createMerchant,
  createAdmin,
  getListMerchants,
  getMarchandInformations,
  valideteAccountMarchand,
  generateNewCredentials,
} = require('./controller/merchantsController');

const router = express.Router();
router.use(express.json());

router.post('/admin', createAdmin);

// Authentification
router.post('/login', login);
router.post('/logout', logout);

// Les Merchants
router.post('/merchants', createMerchant);
router.get('/merchants', authorisationJWT, onlyAdmin, getListMerchants);
router.get('/merchants/:mid(\\d+)', authorisationJWT, isAuthorised, getMarchandInformations);
router.put('/merchants/:mid(\\d+)/validate', authorisationJWT, onlyAdmin, valideteAccountMarchand);
router.delete('/merchants/:mid(\\d+)/credentials', authorisationJWT, isAuthorised, generateNewCredentials);

// Les Transactions
router.post('/transactions', authorisationJWT, isAuthorised, createUserTransaction);
router.get('/transactions', authorisationJWT, isAuthorised, getListeTransactions); // '/transactions?search=text&mid=mid'
router.get('/transactions/:tid(\\d+)', authorisationJWT, isAuthorised, getTransactionInformations); // "?mid=mid"
router.put('/transactions/:tid(\\d+)', authorisationJWT, isAuthorised, updateTransaction); // "?mid=mid"

// Les Operations
router.post('/operations', authorisationJWT, isAuthorised, createOperation);
router.get('/operations', authorisationJWT, isAuthorised, getOperations); // "?mid=mid"
router.get('/operations/:oid(\\d+)', authorisationJWT, isAuthorised, getOperation); // "?mid=mid"
router.put('/operations/:oid(\\d+)', updateOperation);
router.get('/operations/:oid(\\d+)/validate', validateOperation);

router.get('/paymenturl/:tid(\\d+)', getPaymentPage);
router.post('/paymenturl/:tid(\\d+)/confirm', validatePaymentPage);
router.get('/paymenturl/:tid(\\d+)/cancel', cancelPaymentPage);
module.exports = router;
