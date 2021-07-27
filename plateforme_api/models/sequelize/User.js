const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const connection = require('../../config/sequelize');

class User extends Model {}

User.init(
  {
    companyName: { type: DataTypes.STRING, allowNull: true, unique: true },
    kbis: { type: DataTypes.STRING, allowNull: true, unique: true },
    role: { type: DataTypes.STRING, allowNull: true, defaultValue: 'merchant' },
    valid: DataTypes.BOOLEAN,
    password: { type: DataTypes.STRING, allowNull: true },
    tel: { type: DataTypes.STRING, allowNull: true },
    site: { type: DataTypes.STRING, allowNull: true },
    urlConfirmation: { type: DataTypes.STRING, allowNull: true },
    urlAnnulation: { type: DataTypes.STRING, allowNull: true },
    quote: { type: DataTypes.STRING, allowNull: true },
    clientToken: { type: DataTypes.STRING, allowNull: true },
    clientSecret: { type: DataTypes.STRING, allowNull: true },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      allowNull: true,
      unique: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'User',
  },
);

const persistUserFields = async (user) => {
  user.password = await bcrypt.hash(user.password, await bcrypt.genSalt());
};
User.addHook('beforeCreate', persistUserFields);
User.addHook('beforeUpdate', persistUserFields);

User.sync({
  alter: true,
});

module.exports = User;
