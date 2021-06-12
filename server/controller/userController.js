const { findAllUsers, saveUser, findUserByEmail } = require('../queries/usersQuery');
const security = require('../services/security');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

exports.auth = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const user = await findUserByEmail(email);
		if (user) {
			const token = security.comparePassword(password, user);
			res.header('Authorization', 'Bearer ' + token);
			res.status(200).json({
				action: req.url,
				method: req.method,
				data: { data: { token: token } }
			});
		}
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};

exports.checkJWT = async (req, res, next) => {
	try {
		let token = req.headers['x-access-token'] || req.headers['authorization'];
		if (!!token && token.startsWith('Bearer ')) {
			token = token.slice(7, token.length);
		}

		if (token) {
			let decoded = await jwt.verify(token, SECRET_KEY);
			if (decoded) {
				req.decoded = decoded;
				const expiresIn = 24 * 60 * 60;
				const newToken = jwt.sign(
					{
						user: decoded.user
					},
					SECRET_KEY,
					{
						expiresIn: expiresIn
					}
				);
				res.header('Authorization', 'Bearer ' + newToken);
				return next();
			}
			return res.status(401).json('token_not_valid');
		} else {
			return res.status(404).json('token_required');
		}
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};

exports.fetchUsers = async (req, res, next) => {
	try {
		const users = await findAllUsers();
		res.status(200).json({
			action: req.baseUrl,
			method: req.method,
			data: { users }
		});
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};

exports.saveUsers = async (req, res, next) => {
	try {
		const user = await saveUser(req.body);
		res.status(201).json({
			action: req.baseUrl,
			method: req.method,
			data: { user }
		});
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};
