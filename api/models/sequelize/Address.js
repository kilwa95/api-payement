const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');

class Address extends Model {}

Address.init(
	{
		street: DataTypes.STRING,
		city: DataTypes.STRING,
		postalCode: DataTypes.INTEGER
	},
	{
		sequelize: connection,
		modelName: 'Address'
	}
);

Address.sync({
	alter: true
});

module.exports = Address;
