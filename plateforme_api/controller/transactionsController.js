const { HTTP, isEmpty } = require('../Helper');

const { createTransaction, findAllTransactions, findOneTransaction, updateTransaction } = require('../queries/transactionQuery');

exports.createUserTransaction = async (req, res) => {
  try {
    const { priceTotal, quote, delivery, commandId, clientInformation, panierUser, mid } = req.body;

    if (isEmpty([priceTotal, quote, delivery, mid, commandId, clientInformation, panierUser])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    const transaction = await createTransaction({
      priceTotal,
      quote,
      delivery,
      userId: mid,
      commandId,
      clientInformation,
      panierUser,
      status: 'created',
    });

    const generatedUrl = `/secureGeneratedUrl/${transaction.id}`;
    return res.status(HTTP.OK).json({
      data: { transaction, generatedUrl },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.getListeTransactions = async (req, res) => {
  try {
    const transactions = await findAllTransactions();

    return res.status(HTTP.OK).json({
      data: { transactions },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.getTransactionInformations = async (req, res) => {
  try {
    const { tid } = req.params;

    if (isEmpty([tid])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }
    const transaction = await findOneTransaction(tid);

    return res.status(HTTP.OK).json({
      data: { transaction },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const { status } = req.body;
    const { tid } = req.params;

    if (isEmpty([status, tid])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }
    const keys = { status };
    await updateTransaction(keys, tid);
    const transaction = await findOneTransaction(tid);

    return res.status(HTTP.OK).json({
      data: { transaction },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};
