const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const Transaction = require('./Transaction');
const Panier = require('./Panier');


class Transaction_panier extends Model {}


Transaction_panier.init(
	{},
	{
		sequelize: connection,
		modelName: 'Transaction_panier'
	}
);

Transaction.belongsToMany(Panier, { as: "products", through: "Transaction_panier" });
Panier.belongsToMany(Transaction, { as: "transactions", through: "Transaction_panier" });


Transaction_panier.sync({
	alter: true
});


module.exports = Transaction_panier;
