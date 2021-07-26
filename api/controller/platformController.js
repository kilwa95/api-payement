const { findCredentialsByUserId , saveCredentials} = require('../queries/usersQuery');

exports.FetchCredentials = async (req, res, next) => {
	try {
		const credentials = await findCredentialsByUserId(req.decoded.user.id);
			res.status(200).json({
				action: req.url,
				method: req.method,
				data: credentials
			});
		
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};

exports.SaveCredentials = async (req, res, next) => {
	try {
		 await saveCredentials(req.body,req.decoded.user.id);
		 const credentials = await findCredentialsByUserId(req.decoded.user.id);
			res.status(200).json({
				action: req.url,
				method: req.method,
				data: credentials
			});
		
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};