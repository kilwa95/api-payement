const { findAllMerchants, updateMerchant, findMerchantById } = require('../queries/merchantQuery');
const email = require('../services/email');

exports.fetchMerchants = async (req, res, next) => {
	try {
		const merchants = await findAllMerchants(req.query);
		res.status(200).json({
			action: req.url,
			method: req.method,
			data: { merchants }
		});
	} catch (error) {
		console.error(error.message) || res.sendStatus(500);
	}
};

exports.ValidMerchant = async (req, res, next) => {
	console.log(req.body);
	const mail = {
		subject: 'activation de compte client',
		text: 'votre compte client est maintenance active'
	};
	try {
		await updateMerchant(req.body, req.params);
		const merchant = await findMerchantById(req.query, req.params);
		email.send(mail);

		res.status(200).json({
			action: req.url,
			method: req.method,
			data: { merchant }
		});
	} catch (error) {
		console.error(error.message) || res.sendStatus(500);
	}
};
