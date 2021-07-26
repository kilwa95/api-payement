const { findAllUsers, saveUser } = require('../queries/usersQuery');
const { saveAddress } = require('../queries/addressQuery');


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
