const Address = require('../models/sequelize/Address');

exports.saveAddress = async (body) => {
	try {
		const address = new Address(body);
		await address.save();
		return address.id;
	} catch (error) {
		console.error(error);
	}
};
