const { HTTP, isEmpty } = require('../Helper');

const { saveTransaction , findAllTransactions} = require('../queries/transactionQuery')

exports.createUserTransaction = async (req, res) => {
  try {
    const { priceTotal, quote, delivery, userId, commandId } = req.body;


    if (isEmpty([priceTotal, quote, delivery, userId, commandId ])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }


    const body = {
      priceTotal,
      quote,
      delivery,
      userId, 
      commandId,
      status: 'created'
    };

    const transaction = await saveTransaction(body)
    
    return res.status(HTTP.OK).json({
      data: {transaction},
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.getListeTransactions = async (req, res) => {
  try {

    const transactions = await findAllTransactions()

    return res.status(HTTP.OK).json({
      data: {transactions},
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.getTransactionInformations = async (req, res) => {
  try {
    const { params } = req.body; // req.params, req.query

    if (isEmpty([params])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    return res.status(HTTP.OK).json({
      data: {},
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

//  Afficher l’historique des différents statuts de la transaction
exports.getTransactionHistory = async (req, res) => {
  try {
    const { params } = req.body; // req.params, req.query

    if (isEmpty([params])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    return res.status(HTTP.OK).json({
      data: {},
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};
