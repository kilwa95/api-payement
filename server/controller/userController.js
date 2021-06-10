const { findAllUsers, saveUser } = require('../queries/usersQuery');

exports.fetchUsers = async (req, res, next) => {
	console.log(req);
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
