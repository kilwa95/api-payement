const { findAllUsers, saveUser, findUserByEmail } = require('../queries/usersQuery');
const { saveAddress } = require('../queries/addressQuery');
const security = require('../services/security');

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
				data: { data: { user: user, token: token } }
			});
		}
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};

exports.fetchUsers = async (req, res, next) => {
	try {
		const users = await findAllUsers(req.query);
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
	const {address, ...rest} = req.body

	try {
		const addressId = await saveAddress(address)
		rest.addressId = addressId;
		const user = await saveUser(rest);
		res.status(201).json({
			action: req.baseUrl,
			method: req.method,
			data: { user }
		});
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};
