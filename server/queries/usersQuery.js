const User = require('../models/sequelize/User');

exports.findAllUsers = async () => {
	try {
		return await User.findAll({});
	} catch (error) {
		console.error(error);
	}
};
exports.saveUser = async (body) => {
	try {
		const user = await new User(body);
		return await user.save();
	} catch (error) {
		console.error(error);
	}
};
exports.findUserByEmail = async (email) => {
	try {
		return await User.findOne({ email: email });
	} catch (error) {
		console.error(error);
	}
};
