const User = require('../models/sequelize/User');
const Address = require('../models/sequelize/Address');

exports.findAllUsers = async (query) => {
	const { address, ...rest } = query;
	try {
		return await User.findAll({
			attributes: [ 'id', 'firstName', 'lastName', 'phone', 'email', 'roles', 'valid' ],
			where: {
				roles: [ 'user' ]
			},
			include: [
				{
					model: Address,
					as: 'address',
					where: address,
					attributes: [ 'id', 'street', 'city', 'postalCode' ]
				}
			]
		});
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
		const user = await User.findOne({ where: { email: email } });
		return user;
	} catch (error) {
		console.error(error);
	}
};
