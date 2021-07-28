const { saveAddress } = require('../queries/addressQuery');
const { saveMerchant } = require('../queries/merchantQuery');
const email = require('../services/email');

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
