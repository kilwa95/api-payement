const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const oidcTokenHash = require('oidc-token-hash');
const { HTTP, isEmpty } = require('../Helper');
const { findUserByEmail, findUserById } = require('../queries/usersQuery');
const { createOperation } = require('../queries/operationsQuery');
const { findOneTransaction, updateTransaction } = require('../queries/transactionQuery');
const { sendToMarchand, sendToPsp } = require('../services/AxiosApi');

const { SECRET_KEY } = process.env;
const TOKEN_EXPIRE_IN = 24 * 60 * 60;
const ACCESS_TOKEN =  'YmJiZTAwYmYtMzgyOC00NzhkLTkyOTItNjJjNDM3MGYzOWIy9sFhvH8K_x8UIHj1osisS57f5DduL-ar_qw5jl3lthwpMjm283aVMQXDmoqqqydDSqJfbhptzw8rUVwkuQbolw';

function checkPassword(password1, password2) {
  return bcrypt.compare(password1, password2);
}

function generateToken(decoded, secretKey = SECRET_KEY, expiresIn = TOKEN_EXPIRE_IN) {
  return jwt.sign({ ...decoded }, secretKey, { expiresIn });
}

function getTokenFromRequest(req) {
  let token = '';
  const authorization = req.headers['x-access-token'] || req.headers.authorization;
  if (!!authorization && authorization.startsWith('Bearer ')) {
    token = authorization.slice(7, authorization.length);
  }
  return token;
}

async function getDecodedFromToken(token) {
  if (!token) {
    return '';
  }
  const decoded = await jwt.verify(token, SECRET_KEY);
  return decoded;
}

async function authorisationJWT(req, res, next) {
  try {
    const token = getTokenFromRequest(req);
    const decoded = await getDecodedFromToken(token);
    if (!token || !decoded) {
      return res.status(HTTP.UNAUTHORIZED).json({ error: 'UNAUTHORIZED' });
    }
    req.decoded = decoded;
    // const newToken = generateToken(decoded);
    // res.header('Authorization', `Bearer ${newToken}`);
    return next();
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
}

async function logout(req, res) {
  try {
    req.decoded = null;
    return res.status(HTTP.OK).json({});
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (isEmpty([email, password])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    const user = await findUserByEmail(email);

    if (isEmpty([user])) {
      return res.status(HTTP.UNAUTHORIZED).json({ error: 'UNAUTHORIZED' });
    }

    const isPasswordOk = checkPassword(password, user.password);

    if (!isPasswordOk || !(user.role === 'admin' || user.valid)) {
      return res.status(HTTP.UNAUTHORIZED).json({ error: 'UNAUTHORIZED' });
    }

    const decoded = { id: user.id, role: user.role, isAdmin: user.role === 'admin' };
    const token = generateToken(decoded);

    res.header('Authorization', `Bearer ${token}`);

    user.password = undefined;

    return res.status(HTTP.OK).json({
      data: { user, token},
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
}

function isAuthorised(req, res, next) {
  try {
    if (!req.decoded) {
      return res.status(HTTP.UNAUTHORIZED).json({ error: 'UNAUTHORIZED' });
    }
    const { id, isAdmin } = req.decoded;
    const mid = req.params.mid || req.body.mid || req.query.mid;
    const isAuth = isAdmin || id == mid;
    if (!isAuth) {
      return res.status(HTTP.UNAUTHORIZED).json({ error: 'UNAUTHORIZED' });
    }
    return next();
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
}

function onlyAdmin(req, res, next) {
  try {
    if (req.decoded && req.decoded.isAdmin) {
      return next();
    }
    return res.status(HTTP.UNAUTHORIZED).json({ error: 'UNAUTHORIZED' });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
}

function generateClientTokens() {
  const tokens = {
    clientToken: oidcTokenHash.generate(ACCESS_TOKEN, 'RS256'),
    clientSecret: oidcTokenHash.generate(ACCESS_TOKEN, 'HS384'),
  };
  return tokens;
}

async function validatePaymentPage(req, res) {
  try {
    const { tid } = req.params;

    const transaction = await findOneTransaction(tid);
    await updateTransaction({ status: 'en attente' }, tid);

    const operation = await createOperation({
      type: 'Capture',
      transactionId: tid,
      status: 'created',
    });
    await sendToPsp(operation.id, req.body);
    await sendToMarchand(transaction.commandId, 'en attente');

    const user = await findUserById(transaction.userId);
    const { urlConfirmation } = user;
    return res.redirect(`http://localhost:3000/${urlConfirmation}?tid=${tid}`);
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
}

async function cancelPaymentPage(req, res) {
  try {
    const { tid } = req.params;

    const transaction = await findOneTransaction(tid);
    const user = await findUserById(transaction.userId);
    const { urlAnnulation } = user;
    return res.redirect(`http://localhost:3000/${urlAnnulation}?tid=${tid}`);
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
}

async function getPaymentPage(req, res) {
  try {
    const { tid } = req.params;
    return res.render('payment', { confirm: `/paymenturl/${tid}/confirm`, cancel: `/paymenturl/${tid}/cancel` });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
}

module.exports = {
  authorisationJWT,
  login,
  logout,
  isAuthorised,
  onlyAdmin,
  generateClientTokens,
  getPaymentPage,
  validatePaymentPage,
  cancelPaymentPage,
};
