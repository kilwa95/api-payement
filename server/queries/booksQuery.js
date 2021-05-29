const Book = require('../models/sequelize/Book');

exports.findAllbooks = async () => {
	try {
		return await Book.findAll({});
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
