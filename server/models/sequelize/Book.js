const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const User = require('./User');
const denormalizeUser = require('../../services/denormalize');

class Book extends Model {}

Book.init(
	{
		title: DataTypes.STRING,
		content: DataTypes.STRING
	},
	{
		sequelize: connection,
		modelName: 'Book'
	}
);

Book.belongsTo(User, { as: 'author' });
User.hasMany(Book, { foreignKey: 'authorId', as: 'books' });

Book.addHook('afterCreate', (book) => denormalizeUser({ id: book.authorId }));
Book.addHook('afterUpdate', (book) => denormalizeUser({ id: book.authorId }));

Book.sync({
	alter: true
});

module.exports = Book;
