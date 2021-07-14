
const { saveTransaction , findAllTransactions  } = require('../queries/transactionQuery');
const { updatePanierTransaction, findAllProductsPanierByTransactionId  } = require('../queries/panierQuery');

exports.SaveTransaction= async (req, res, next) => {
    const {panier, ...Rest} = req.body
    const transaction = await saveTransaction(Rest);
    const ids = panier.map(pnaier => pnaier.product.id)
    const resultat = await updatePanierTransaction(transaction.id,ids)

    res.status(200).json({
        action: req.baseUrl,
        method: req.method,
        data: { transaction }
    });

}

exports.FetchTransactions= async (req, res, next) => {
    const transactions = await findAllTransactions()
    const transactionsJson = transactions.map(transaction => transaction.toJSON())

    for (let transaction in transactionsJson) {
        transactionsJson[transaction].products = await findAllProductsPanierByTransactionId(transactionsJson[transaction].id)
    }
    

    res.status(200).json({
        action: req.baseUrl,
        method: req.method,
        data: { transactions:transactionsJson }
    });

}
