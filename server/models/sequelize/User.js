const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const bcrypt = require('bcryptjs');
const Address = require('./Address');

class User extends Model {}

User.init(
	{
		firstName: { type: DataTypes.STRING, allowNull: true },
		lastName: { type: DataTypes.STRING, allowNull: true },
		companyName: { type: DataTypes.STRING, allowNull: true },
		phone: { type: DataTypes.INTEGER, allowNull: true },
		roles: DataTypes.ARRAY(DataTypes.STRING),
		email: {
			type: DataTypes.STRING,
			validate: {
				isEmail: true
			},
			allowNull: false
		},
		password: { type: DataTypes.STRING, allowNull: false }
	},
	{
		sequelize: connection,
		modelName: 'User'
	}
);

const encodePassword = async (user) => {
	user.password = await bcrypt.hash(user.password, await bcrypt.genSalt());
};
User.addHook('beforeCreate', encodePassword);
User.addHook('beforeUpdate', encodePassword);

// One To Many
User.belongsTo(Address, { as: 'address' });
Address.hasMany(User, { foreignKey: 'addressId', as: 'writtenAdress' });

User.sync({
	alter: true
});

module.exports = User;
