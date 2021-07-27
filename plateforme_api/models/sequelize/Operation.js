const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const Transaction = require('./Transaction');

class Operation extends Model {}

Operation.init(
  {
    type: DataTypes.STRING,
    status: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: 'Operation',
  }
);

Operation.belongsTo(Transaction, { as: 'transaction' });
Transaction.hasMany(Operation, { foreignKey: 'transactionId', as: 'operations' });

Operation.sync({
  alter: true,
});

module.exports = Operation;
