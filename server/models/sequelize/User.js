const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const bcrypt = require('bcryptjs');
const Address = require('./Address');

class User extends Model {}

User.init(
	{
		firstName: { type: DataTypes.STRING, allowNull: true },
		lastName: { type: DataTypes.STRING, allowNull: true },
		companyName: { type: DataTypes.STRING, allowNull: true, unique: true },
		phone: { type: DataTypes.INTEGER, allowNull: true },
		roles: DataTypes.ARRAY(DataTypes.STRING),
		valid: DataTypes.BOOLEAN,
		email: {
			type: DataTypes.STRING,
			validate: {
				isEmail: true
			},
			allowNull: false,
			unique: true
		},
		password: { type: DataTypes.STRING, allowNull: false }
	},
	{
		sequelize: connection,
		modelName: 'User'
	}
);

const persistUserFields = async (user) => {
	user.password = await bcrypt.hash(user.password, await bcrypt.genSalt());
};
User.addHook('beforeCreate', persistUserFields);
User.addHook('beforeUpdate', persistUserFields);

// One To Many
User.belongsTo(Address, { as: 'address' });
Address.hasMany(User, { foreignKey: 'addressId', as: 'users' });

User.sync({
	alter: true
});

module.exports = User;
