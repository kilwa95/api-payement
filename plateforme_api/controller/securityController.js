const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { HTTP, isEmpty } = require('../Helper');
const { findUserByEmail } = require('../queries/usersQuery');

const { SECRET_KEY } = process.env;
const TOKEN_EXPIRE_IN = 24 * 60 * 60;

function checkPassword(password1, password2) {
  return bcrypt.compare(password1, password2);
}

function generateToken(session, secretKey = SECRET_KEY, expiresIn = TOKEN_EXPIRE_IN) {
  return jwt.sign({ session }, secretKey, { expiresIn });
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

    req.session = decoded.session;

    const newToken = generateToken(decoded.session);
    res.header('Authorization', `Bearer ${newToken}`);
    return next();
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
}

async function logout(req, res) {
  try {
    req.session = null;
    return res.status(HTTP.OK).json({});
  } catch (err) {
    return res.status(HTTP.SERVER_ERROR).json({ error: '' });
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

    if (!isPasswordOk) {
      return res.status(HTTP.UNAUTHORIZED).json({ error: 'UNAUTHORIZED' });
    }

    const session = { id: user.id, role: user.role, isAdmin: user.role && user.role === 'admin' };
    const token = generateToken(session);

    res.header('Authorization', `Bearer ${token}`);

    return res.status(HTTP.OK).json({
      data: { user,token },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
}

function isAuthorised(req, res, next) {
  try {
    if (!req.session) {
      res.status(HTTP.UNAUTHORIZED).json({ error: 'UNAUTHORIZED' });
    }
    const { id, isAdmin } = req.session;
    const mid = req.params.mid || req.body.mid || req.query.mid;
    const isAuth = isAdmin || id == mid;
    if (!isAuth) {
      return res.status(HTTP.UNAUTHORIZED).json({ error: 'UNAUTHORIZED' });
    }
    return next();
  } catch (err) {
    return res.status(HTTP.SERVER_ERROR).json({ error: '' });
  }
}

function onlyAdmin(req, res, next) {
  try {
    if (req.session && req.session.isAdmin) {
      return next();
    }
    return res.status(HTTP.UNAUTHORIZED).json({ error: 'UNAUTHORIZED' });
  } catch (err) {
    return res.status(HTTP.SERVER_ERROR).json({ error: '' });
  }
}
module.exports = {
  authorisationJWT,
  login,
  logout,
  isAuthorised,
  onlyAdmin,
};
