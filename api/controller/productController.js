const { findAllProducts, saveProduct } = require('../queries/productsQuery');

exports.fetchProducts = async (req, res, next) => {
	try {
		const products = await findAllProducts(req.query);
		res.status(200).json({
			action: req.baseUrl,
			method: req.method,
			data: { products }
		});
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};

exports.SaveProduct = async (req, res, next) => {
	try {
		const product = await saveProduct(req.body);
		res.status(200).json({
			action: req.url,
			method: req.method,
			data: { product }
		});
	} catch (error) {
		console.error(error.message) || res.sendStatus(500);
	}
};
