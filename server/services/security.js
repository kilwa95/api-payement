const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
	comparePassword: function(password, user) {
		let token = '';
		const response = bcrypt.compare(password, user.password);
		if (response) {
			const expireIn = 24 * 60 * 60;
			token = jwt.sign(
				{
					user: user
				},
				SECRET_KEY,
				{
					expiresIn: expireIn
				}
			);
			return token;
		}
	}
};
