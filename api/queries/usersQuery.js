const User = require('../models/sequelize/User');
const Address = require('../models/sequelize/Address');

exports.findAllUsers = async () => {
  try {
    return await User.findAll({
			attributes: [ 'id', 'firstName', 'lastName', 'phone', 'email', 'roles', 'valid' ],
      where: {
				roles: [ 'user' ]
      },
      include: [
        {
          model: Address,
          as: 'address',
					attributes: [ 'id', 'street', 'city', 'postalCode' ]
				}
			]
    });
  } catch (error) {
    console.error(error);
  }
};
exports.saveUser = async (body) => {
  try {
    const user = await new User(body);
    return await user.save();
  } catch (error) {
    console.error(error);
  }
};
exports.findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    return user;
  } catch (error) {
    console.error(error);
  }
};
exports.findCredentialsByUserId = async (userID) => {
  try {
		const credentials = await User.findOne({  attributes: ['client_token', 'client_secret'],where: { id: userID } });
    return credentials;
  } catch (error) {
    console.error(error);
  }
};
exports.saveCredentials = async (body, userID) => {
  console.log(body)
  try {
    const credentials  = await User.update(body, {
      where: { id: userID }
    });
    return credentials ;
  } catch (error) {
    console.error(error);
  }
};


