const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');

class Product extends Model {}

Product.init(
	{
		titre: DataTypes.STRING,
		price: DataTypes.INTEGER,
		image: DataTypes.STRING
	},
	{
		sequelize: connection,
		modelName: 'Product'
	}
);

Product.sync({
	alter: true
});

module.exports = Product;
