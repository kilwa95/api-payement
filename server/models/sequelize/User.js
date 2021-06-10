const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');

class User extends Model {}

User.init(
	{
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING
	},
	{
		sequelize: connection,
		modelName: 'User'
	}
);

User.sync({
	alter: true
});

module.exports = User;
