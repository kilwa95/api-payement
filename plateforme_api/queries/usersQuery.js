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
exports.createUser = async obj => {
  try {
    const user = new User(obj);
    return await user.save();
  } catch (error) {
    console.error(error);
  }
};
exports.findUserByEmail = async email => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    console.error(error);
  }
};

exports.findAllMerchants = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        role: 'merchant',
      },
    });
    const merchants = users.map(user => {
      user.password = undefined;
      return user;
    });
    return merchants;
  } catch (error) {
    console.error(error);
  }
};

exports.findMerchantById = async mid => {
  try {
    const merchant = await User.findOne({
      where: { id: mid },
    });
    return merchant;
  } catch (error) {
    console.error(error);
  }
};

exports.updateMerchant = async (keys, mid) => {
  try {
    const data = await User.update(keys, {
      where: { id: mid },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
