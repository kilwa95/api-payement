const { saveCommande, findAllcommandes, saveCommandeProduct, updateCommandeStatus, findCommandeById } = require('../queries/commandeQuery');

exports.SaveCommande = async (req, res, next) => {
  const { products, ...Rest } = req.body;
  try {
    const commandeID = await saveCommande(Rest);
    const ids = products.map(product => product.id);
    const commande_product = await saveCommandeProduct(ids, commandeID);

    // todo send to the plateform
    res.status(200).json({
      action: req.url,
      method: req.method,
      data: commande_product,
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
    await updateCommandeStatus(req.params.id, { status: req.body.status });
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
