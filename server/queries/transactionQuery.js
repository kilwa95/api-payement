const Transaction = require('../models/sequelize/Transaction');
const User = require('../models/sequelize/User');
const Address = require('../models/sequelize/Address');


exports.saveTransaction = async (body) => {
	try {
		const transaction = new Transaction(body);
		return await transaction.save();
	} catch (error) {
		console.error(error);
	}
};

exports.findAllTransactions = async () => {
	try {
		return await Transaction.findAll({
			attributes:['id','priceTotal'],
			include: [
				{
				model: User,
				as: "user",
				attributes: ['id','firstName','lastName','phone','email'],
				},
				{
				model: Address,
				as: "delivery",
				},
			]
		});
	} catch (error) {
		console.error(error);
	}
};

