const Transaction = require('../models/sequelize/Transaction');

exports.saveTransaction = async (body) => {
	try {
		const transaction = new Transaction(body);
		return await transaction.save();
	} catch (error) {
		console.error(error);
	}
};

