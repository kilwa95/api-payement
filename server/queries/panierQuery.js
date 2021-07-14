const Panier = require('../models/sequelize/Panier');
const Product = require('../models/sequelize/Product');
const User = require('../models/sequelize/User');

exports.findAllProductsPanierById = async (query, id) => {
	const { product, user, ...rest } = query;
	try {
		return await Panier.findAll({
			attributes: [],
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
		return await Panier.findAll({
			attributes: [],
			where: {
				transactionId: transactionId
			},
			include: [
				{
					model: Product,
					as: 'product',
					attributes: [ 'id', 'titre', 'price', 'image' ]
				}
			]
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
