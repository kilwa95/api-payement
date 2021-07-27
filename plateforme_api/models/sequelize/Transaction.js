const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const User = require('./User');

class Transaction extends Model {}

Transaction.init(
  {
    priceTotal: DataTypes.INTEGER,
    delivery: DataTypes.STRING,
    status: DataTypes.STRING,
    quote: DataTypes.STRING,
    clientInformation: DataTypes.STRING,
    panierUser: DataTypes.STRING,
    commandId: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: 'Transaction',
  }
);

Transaction.belongsTo(User, { as: 'user' });
User.hasMany(Transaction, { foreignKey: 'userId', as: 'transactions' });

Transaction.sync({
  alter: true,
});

module.exports = Transaction;
