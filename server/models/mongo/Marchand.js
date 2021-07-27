const { Schema } = require('mongoose');
const conn = require('../../config/mongo');

const MarchandSchema = new Schema({
    _id: Number,
    comanyName: String,
    Kbis: String,
    currency:String,
	firstName: String,
	lastName: String,
	email: String,
	password: String,
});

const Marchand = conn.model('Marchand', MarchandSchema);

module.exports = Marchand;
