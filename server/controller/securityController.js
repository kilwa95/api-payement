const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

exports.isAdmin = async (req, res, next) => {
	if (!req.decoded.user.roles.includes('admin')) {
		return res.status(401).json('admin-require');
	}

	next();
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
