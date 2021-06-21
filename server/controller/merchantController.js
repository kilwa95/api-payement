const { saveAddress } = require('../queries/addressQuery');
const { saveMerchant, findAllMerchants, updateMerchant } = require('../queries/merchantQuery');

exports.SaveMerchant = async (req, res, next) => {
	const { address, ...rest } = req.body;
	try {
		const addressID = await saveAddress(address);
		rest.addressId = addressID;
		const merchant = await saveMerchant(rest);
		res.status(200).json({
			action: req.url,
			method: req.method,
			data: { merchant }
		});
	} catch (error) {
		console.error(error.message) || res.sendStatus(500);
	}
};
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
exports.UpdateMerchant = async (req, res, next) => {
	try {
		const merchant = await updateMerchant(req.body, req.params);
		res.status(200).json({
			action: req.url,
			method: req.method,
			data: { merchant }
		});
	} catch (error) {
		console.error(error.message) || res.sendStatus(500);
	}
};
