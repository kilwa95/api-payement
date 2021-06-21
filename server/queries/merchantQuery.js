const User = require('../models/sequelize/User');
const Address = require('../models/sequelize/Address');

exports.saveMerchant = async (body) => {
	try {
		const user = await new User(body);
		return await user.save();
	} catch (error) {
		console.error(error);
	}
};
exports.updateMerchant = async (body, params) => {
	try {
		const data = await User.update(body, {
			where: { id: params.id }
		});
		return data;
	} catch (error) {
		console.error(error);
	}
};

exports.findAllMerchants = async (query) => {
	const { address, ...rest } = query;
	try {
		return await User.findAll({
			attributes: [ 'id', 'companyName', 'phone', 'email', 'roles', 'valid' ],
			where: {
				roles: [ 'MERCHANT' ]
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
