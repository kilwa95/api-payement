const axios = require('axios');
const config = require('../config/config');

function sendToMarchand(idCommande, status) {
  const Api = axios.create({
    baseURL: config.urlMarchand,
    timeout: 1000,
  });
  return Api.put(`/commandes/${idCommande}/`, { status });
}

function sendToPsp(oid, CB) {
  const Api = axios.create({
    baseURL: config.urlPsp,
    timeout: 1000,
  });
  return Api.post(`/psp?oid=${oid}`, { CB });
}

module.exports = {
  sendToMarchand,
  sendToPsp,
};
