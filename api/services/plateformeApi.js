const axios = require('axios');
const config = require('../config/config');
const { findCommandeById, updateCommande } = require('../queries/commandeQuery');

async function sendService(methode, url, body, token) {
  const Api = axios.create({
    baseURL: config.plateform.url,
    timeout: 1000,
    withCredentials: true,
  });
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await Api[methode](url, body, headers);
}

function getTokenFromHeader(status, headers) {
  let token = '';
  if (status === 200) {
    const { authorization } = headers;
    if (!!authorization && authorization.startsWith('Bearer ')) {
      token = authorization.slice(7, authorization.length);
    }
  }
  return token;
}

function getUserIdFromData(status, { data }) {
  let userId = '';
  if (status === 200 && data && data.user) {
    userId = data.user.id;
  }
  return userId;
}

async function loginPlateforme() {
  try {
    const { email, password } = config.plateform;
    const { status, data, headers } = await sendService('post', '/login', { email, password }, 'token');
    const token = getTokenFromHeader(status, headers);
    const userId = getUserIdFromData(status, data);

    console.log({ userId, data });

    return { token, userId };
  } catch (error) {
    return error;
  }
}

async function getBodyTrnasaction(commandId, userId) {
  const commande = await findCommandeById(commandId);
  const { priceTotal, quote, createdAt, user, products, factorisation, delivery } = commande;
  const { firstName, lastName, email, phone, address } = user;
  const { street, city, postalCode } = address;
  const panierUser = products.reduce((acc, p) => `${acc}${p.titre} (${p.price} ${quote}), `, '');
  return {
    commandId,
    mid: userId,
    priceTotal,
    quote,
    delivery: `${street}, ${postalCode}, ${city}`,
    clientInformation: `Name: ${firstName} ${lastName}, email: ${email}, phone: ${phone}`,
    date: createdAt,
    panierUser: panierUser,
  };
}

async function createTransaction(commandId) {
  try {
    const { token, userId } = await loginPlateforme();
    if (token && userId) {
      const body = await getBodyTrnasaction(commandId, userId);
      const { status, data } = await sendService('post', '/transactions', body, token);
      const { transaction, generatedUrl } = data.data;
      await updateCommande(commandId, { transactionId: transaction.id, status: transaction.status });
      return { generatedUrl, transaction };
    }
  } catch (error) {
    console.log({ error });
    return error;
  }
}

module.exports = {
  loginPlateforme,
  createTransaction,
};
