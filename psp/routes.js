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
      baseURL: 'http://192.168.240.7:4000',
      timeout: 1000,
    });
    console.log({oid, CB})
    return Api.get(`/operations/${oid}/validate`);
  }, 1000);
  return res.status(200).json("ok");
});

module.exports = router;
