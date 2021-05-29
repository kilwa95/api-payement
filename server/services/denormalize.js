const UserBook = require('../models/mongo/UserBook');
const User = require('../models/sequelize/User');
const Book = require('../models/sequelize/Book');

module.exports = denormalizeUser = async (user) => {
	try {
		const sequelizeData = await User.find(user.id, {
			include: [
				{
					model: Book,
					as: 'books',
					attributes: [ 'id', 'title', 'content' ]
				}
			]
		});
		let data = await sequelizeData.toJSON();
		console.log('debuuger', data);

		data._id = data.id;
		const mongoData = await UserBook.findOneAndReplace({ _id: data._id }, data, {
			upsert: true,
			new: true
		});

		return mongoData;
	} catch (error) {
		console.error(error);
	}
};
