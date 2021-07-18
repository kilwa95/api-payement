const Transaction = require('../models/sequelize/Transaction');
const Transaction_panier = require('../models/sequelize/Transaction_panier');
const User = require('../models/sequelize/User');
const Address = require('../models/sequelize/Address');
const Panier = require('../models/sequelize/Panier');
const Product = require('../models/sequelize/Product');


exports.saveTransaction = async (body) => {
	try {
		const transaction = new Transaction(body);
		return await transaction.save();
	} catch (error) {
		console.error(error);
	}
};

exports.saveTransactionPanier = async (ids,transactionsId) => {
	
	try {
		 for (let id in ids) {
			await Transaction_panier.create({TransactionId:transactionsId,PanierId:ids[id]});
         }
		
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
				{
				model: Panier,
				as: 'products',
				attributes: ['id'],
				include: [
					{
						model: Product,
						as: 'product',
						attributes: ['id','titre', 'price', 'image'],
					}
				]

				},

			]
		});
	} catch (error) {
		console.error(error);
	}
};

