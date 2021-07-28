/* eslint-disable object-curly-newline */
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.use(express.json());

router.post('/psp', (req, res, next) => {
  const { oid } = req.query;
  const { CB } = req.body;
  setTimeout(() => {
    const Api = axios.create({
      baseURL: 'http://localhost:4000',
      timeout: 1000,
    });
    return Api.get(`/operations/${oid}/validate`);
  }, 1000);
});

module.exports = router;
