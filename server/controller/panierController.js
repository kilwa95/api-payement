const { findAllProductsPanierById, saveProductPanier } = require('../queries/panierQuery');

exports.fetchProductsPanierByUserId = async (req, res, next) => {
	console.log(req.params);
	try {
		const panier = await findAllProductsPanierById(req.query, req.params.id);
		res.status(200).json({
			action: req.baseUrl,
			method: req.method,
			data: { panier }
		});
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};
exports.SaveProductsPanier = async (req, res, next) => {
	try {
		const panier = await saveProductPanier(req.body);
		res.status(200).json({
			action: req.baseUrl,
			method: req.method,
			data: { panier }
		});
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};
