const { saveCommande, findAllcommandes, saveCommandeProduct, updateCommande, findCommandeById } = require('../queries/commandeQuery');
const { createTransaction } = require('../services/plateformeApi');

exports.SaveCommande = async (req, res, next) => {
  const { products, ...Rest } = req.body;
  try {
    const commandeID = await saveCommande(Rest);
    const ids = products.map(product => product.id);
    const commande_product = await saveCommandeProduct(ids, commandeID);

    const { generatedUrl, transaction } = await createTransaction(commandeID);

    res.status(200).json({
      action: req.url,
      method: req.method,
      data: commande_product,
      generatedUrl,
      transaction: transaction.id,
    });
  } catch (error) {
    console.error(error) || res.sendStatus(500);
  }
};

exports.FetchOneCommande = async (req, res, next) => {
  try {
    const commande = await findCommandeById(req.params.id);
    res.status(200).json({
      action: req.url,
      method: req.method,
      data: commande,
    });
  } catch (error) {
    console.error(error) || res.sendStatus(500);
  }
};

exports.FetchCommandes = async (req, res, next) => {
  try {
    const commandes = await findAllcommandes();
    res.status(200).json({
      action: req.url,
      method: req.method,
      data: commandes,
    });
  } catch (error) {
    console.error(error) || res.sendStatus(500);
  }
};

exports.updateCommandeStatus = async (req, res, next) => {
  try {
    await updateCommande(req.params.id, { status: req.body.status });
    const commande = await findCommandeById(req.params.id);
    res.status(200).json({
      action: req.url,
      method: req.method,
      data: commande,
    });
  } catch (error) {
    console.error(error) || res.sendStatus(500);
  }
};
