const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const Product = require('./Product');
const User = require('./User');
const Transaction = require('./Transaction');


class Panier extends Model {}

Panier.init(
	{},
	{
		sequelize: connection,
		modelName: 'Panier'
	}
);

Panier.belongsTo(Product, { as: 'product' });
Panier.belongsTo(User, { as: 'user' });
Panier.belongsTo(Transaction, { as: 'transaction' });

Product.hasMany(Panier, { foreignKey: 'productId', as: 'paniers' });
User.hasMany(Panier, { foreignKey: 'userId', as: 'paniers' });
Transaction.hasMany(Panier, { foreignKey: 'transactionId', as: 'products' });

Panier.sync({
	alter: true
});

module.exports = Panier;
