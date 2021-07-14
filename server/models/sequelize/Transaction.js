const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const User = require('./User');
const Address = require('./Address');
const Panier = require('./Panier');
const Product = require('./Product');


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
User.hasMany(Transaction, { foreignKey: 'userId', as: 'transactions' });
Address.hasMany(Transaction, { foreignKey: 'addressId', as: 'transactions' });


const denormalizeTransaction = async (transaction) => {
	const sequelizeData  = await Transaction.findByPk(transaction.id,{
		attributes: ['id','priceTotal'],
		include: [
			{
			model: User,
			as: "user",
			attributes: ['id','firstName','lastName','phone','email'],
			},

			{
			model: Panier,
			as: "products",
			attributes: [ 'id', 'titre', 'price', 'image' ]
		   },
		]
	})
	 
	const data  = sequelizeData.toJSON();
	console.log('sequelizeData', data)
}


// Transaction.addHook("afterCreate", denormalizeTransaction);

Transaction.sync({
	alter: true
});

module.exports = Transaction;