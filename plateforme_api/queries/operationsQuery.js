const Operation = require('../models/sequelize/Operation');

exports.createOperation = async body => {
  try {
    const operation = new Operation(body);
    return await operation.save();
  } catch (error) {
    console.error(error);
  }
};

exports.findAllOperationsByTid = async (tid) => {
  try {
    return await Operation.findAll({
      where: { transactionId: tid },
    });
  } catch (error) {
    console.error(error);
  }
};

exports.findOneOperation = async oid => {
  try {
    const operation = await Operation.findOne({
      where: { id: oid },
    });
    return operation;
  } catch (error) {
    console.error(error);
  }
};

exports.updateOperation = async (keys, oid) => {
  try {
    const data = await Operation.update(keys, {
      where: { id: oid },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
