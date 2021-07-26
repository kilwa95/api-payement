const { saveCommande , findAllcommandes , saveCommandeProduct , updateCompanyStatus , findCommandeById} = require('../queries/commandeQuery');

exports.SaveCommande = async (req, res, next) => {
	const {products, ...Rest} = req.body
	try {
		const commandeID =  await saveCommande(Rest);
		const ids = products.map(product => product.id)
		const commande_product = await saveCommandeProduct(ids,commandeID)

			res.status(200).json({
				action: req.url,
				method: req.method,
				data: commande_product
			});
		
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};

exports.FetchCommandes = async (req, res, next) => {
	try {
		const commandes =  await findAllcommandes();
			res.status(200).json({
				action: req.url,
				method: req.method,
				data: commandes
			});
		
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};

exports.UpdateCompanyStatus = async (req, res, next) => {

	try {
		 await updateCompanyStatus(req.params.id, {status : "reimbursed"})
		 const commande = await findCommandeById(req.params.id)
			res.status(200).json({
				action: req.url,
				method: req.method,
				data: commande
			});
		
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};

exports.UpdateCompanyStatusValid = async (req, res, next) => {

	try {
		 await updateCompanyStatus(req.params.id, {status : "validate"})
		 const commande = await findCommandeById(req.params.id)
			res.status(200).json({
				action: req.url,
				method: req.method,
				data: commande
			});
		
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};

exports.UpdateCompanyStatusAnnulation = async (req, res, next) => {

	try {
		 await updateCompanyStatus(req.params.id, {status : "annulment"})
		 const commande = await findCommandeById(req.params.id)
			res.status(200).json({
				action: req.url,
				method: req.method,
				data: commande
			});
		
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};

exports.UpdateCompanyStatusConfirmation = async (req, res, next) => {

	try {
		 await updateCompanyStatus(req.params.id, {status : "confirmation"})
		 const commande = await findCommandeById(req.params.id)
			res.status(200).json({
				action: req.url,
				method: req.method,
				data: commande
			});
		
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};
