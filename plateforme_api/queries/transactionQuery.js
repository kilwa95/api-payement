const Transaction = require('../models/sequelize/Transaction');
const User = require('../models/sequelize/User');

exports.saveTransaction = async body => {
  try {
    const transaction = new Transaction(body);
    return await transaction.save();
  } catch (error) {
    console.error(error);
  }
};

exports.saveTransactionPanier = async (ids, transactionsId) => {
  try {
    for (const id in ids) {
      await Transaction_panier.create({ TransactionId: transactionsId, PanierId: ids[id] });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.findAllTransactions = async () => {
  try {
    return await Transaction.findAll({
      include: [
        {
          model: User,
          as: 'user',
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
};
