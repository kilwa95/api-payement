const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const Product = require('./Product');
const User = require('./User');

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
Product.hasMany(Panier, { foreignKey: 'productId', as: 'writtenproducts' });
User.hasMany(Panier, { foreignKey: 'userId', as: 'writtenusers' });

Panier.sync({
	alter: true
});

module.exports = Panier;
