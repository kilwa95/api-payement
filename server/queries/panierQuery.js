const Panier = require('../models/sequelize/Panier');
const Product = require('../models/sequelize/Product');
const User = require('../models/sequelize/User');
const Transaction_panier = require('../models/sequelize/Transaction_panier');

exports.findAllProductsPanierById = async (query, id) => {
	const { product, user, ...rest } = query;
	try {
		return await Panier.findAll({
			// attributes: [],
			where: {
				userId: id
			},
			include: [
				{
					model: Product,
					as: 'product',
					where: product,
					attributes: [ 'id', 'titre', 'price', 'image' ]
				}
			]
		});
	} catch (error) {
		console.error(error);
	}
};
exports.findAllProductsPanierByTransactionId = async (transactionId ) => {
	try {
		return await Transaction_panier.findAll({
			where: {
				TransactionId: transactionId
			},
		});
	} catch (error) {
		console.error(error);
	}
};
exports.findProductPanierById = async (query, id) => {
	const { product, user, ...rest } = query;
	try {
		return await Panier.findOne({
			attributes: [],
			where: {
				id: id
			},
			include: [
				{
					model: Product,
					as: 'product',
					where: product,
					attributes: [ 'id', 'titre', 'price', 'image' ]
				}
			]
		});
	} catch (error) {
		console.error(error);
	}
};

exports.saveProductPanier = async (body) => {
	try {
		const panier = new Panier(body);
		return await panier.save();
	} catch (error) {
		console.error(error);
	}
};

exports.updatePanierTransaction = async (transactionId,ids) => {
	try {
		Panier.update({transactionId: transactionId},{where: {id:ids}})
	} catch (error) {
		console.error(error);
	}
};
