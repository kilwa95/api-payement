/* eslint-disable indent */
const User = require('../models/sequelize/User');

exports.findAllUsers = async () => {
  try {
    return await User.findAll({
      attributes: ['id', 'password', 'email', 'role', 'valid'],
      where: {
        role: 'merchant',
      },
    });
  } catch (error) {
    console.error(error);
  }
};
exports.createUser = async (obj) => {
  try {
    const user =  new User(obj);
    return await user.save();
  } catch (error) {
    console.error({ name: 'createUser', error });
  }
};
exports.findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    console.error({ name: 'findUserByEmail', error });
  }
};
