const Panier = require('../models/sequelize/Panier');
const Product = require('../models/sequelize/Product');

exports.findAllProductsPanierById = async (query, id) => {
	const { product, user, ...rest } = query;
	try {
		return await Panier.findAll({
			attributes: ['id'],
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
