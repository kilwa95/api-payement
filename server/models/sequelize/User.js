const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const denormalizeUser = require('../../services/denormalize');

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

User.addHook('afterCreate', denormalizeUser);
User.addHook('afterUpdate', denormalizeUser);

module.exports = User;
