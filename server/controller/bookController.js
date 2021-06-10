const { findAllbooks, saveBook } = require('../queries/booksQuery');

exports.fetchBooks = async (req, res, next) => {
	try {
		const books = await findAllbooks(req.query);
		res.status(200).json({
			action: req.baseUrl,
			method: req.method,
			data: { books }
		});
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};

exports.saveBooks = async (req, res, next) => {
	try {
		const book = await saveBook(req.body);
		res.status(201).json({
			action: req.url,
			method: req.method,
			data: { book }
		});
	} catch (error) {
		console.error(error) || res.sendStatus(500);
	}
};
