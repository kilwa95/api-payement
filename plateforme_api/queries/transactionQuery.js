const Transaction = require('../models/sequelize/Transaction');

exports.createTransaction = async (body) => {
  try {
    const transaction = new Transaction(body);
    return await transaction.save();
  } catch (error) {
    console.error(error);
  }
};

exports.findAllTransactions = async () => {
  try {
    return await Transaction.findAll();
  } catch (error) {
    console.error(error);
  }
};

exports.findOneTransaction = async (tid) => {
  try {
    const transaction = await Transaction.findOne({
      where: { id: tid },
    });
    return transaction;
  } catch (error) {
    console.error(error);
  }
};

exports.updateTransaction = async (keys, tid) => {
  try {
    const data = await Transaction.update(keys, {
      where: { id: tid },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
