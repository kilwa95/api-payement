
const { saveTransaction } = require('../queries/transactionQuery');
const { updatePanierTransaction } = require('../queries/panierQuery');

exports.SaveTransaction= async (req, res, next) => {
    const {panier, ...Rest} = req.body
    const transaction = await saveTransaction(Rest);
    const ids = panier.map(pnaier => pnaier.product.id)
    const resultat = await updatePanierTransaction(transaction.id,ids)

    res.status(200).json({
        action: req.baseUrl,
        method: req.method,
        data: { resultat }
    });

}
