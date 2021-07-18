
const { saveTransaction , findAllTransactions , saveTransactionPanier  } = require('../queries/transactionQuery');
const { findAllProductsPanierByTransactionId  } = require('../queries/panierQuery');

exports.SaveTransaction= async (req, res, next) => {
    const {panier, ...Rest} = req.body
    const transaction = await saveTransaction(Rest);
    const ids = panier.map(pnaier => pnaier.product.id)
    const transaction_panier = await saveTransactionPanier(ids,transaction.id)

    res.status(200).json({
        action: req.baseUrl,
        method: req.method, 
        data: { transaction_panier }
    });

}

exports.FetchTransactions= async (req, res, next) => {
    const transactions = await findAllTransactions()
    
    res.status(200).json({
        action: req.baseUrl,
        method: req.method,
        data: { transactions:transactions }
    });

}
