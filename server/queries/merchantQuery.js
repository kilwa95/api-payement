const User = require('../models/sequelize/User');

exports.saveMerchant = async (body) => {
	try {
		const user = await new User(body);
		return await user.save();
	} catch (error) {
		console.error(error);
	}
};
