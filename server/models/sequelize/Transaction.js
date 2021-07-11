const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const User = require('./User');
const Address = require('./Address');


class Transaction extends Model {}

Transaction.init(
	{
        priceTotal: DataTypes.INTEGER,
        factorisation: DataTypes.STRING,
        quote: DataTypes.STRING
	},
	{
		sequelize: connection,
		modelName: 'Transaction'
	}
);

Transaction.belongsTo(User, { as: 'user' });
Transaction.belongsTo(Address, { as: 'address' });
User.hasMany(Transaction, { foreignKey: 'userId', as: 'products' });
Address.hasMany(Transaction, { foreignKey: 'addressId', as: 'writtenAdress' });



Transaction.sync({
	alter: true
});

module.exports = Transaction;
