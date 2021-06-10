const Book = require('../models/sequelize/Book');
const User = require('../models/sequelize/User');

exports.findAllbooks = async (query) => {
	const { author, ...rest } = query;
	try {
		return await Book.findAll({
			where: rest,
			include: [
				{
					model: User,
					as: 'author',
					where: author
				}
			]
		});
	} catch (error) {
		console.error(error);
	}
};

exports.saveBook = async (body) => {
	try {
		const book = await new Book(body);
		return await book.save();
	} catch (error) {
		console.error(error);
	}
};
