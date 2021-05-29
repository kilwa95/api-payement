const { Schema } = require('mongoose');
const conn = require('../../config/mongo');

const UserBookSchema = new Schema({
	_id: Number,
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	Books: Array
});

const UserBook = conn.model('UserBook', UserBookSchema);

module.exports = UserBook;
