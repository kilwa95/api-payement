const nodemailer = require('nodemailer');
const config = require('../config/config');

module.exports = {
	send: function(email) {
		try {
			let transporter = nodemailer.createTransport({
				host: config.nodemailer.host,
				port: config.nodemailer.port,
				auth: {
					user: config.nodemailer.auth.user,
					pass: config.nodemailer.auth.pass
				}
			});
			let info = transporter.sendMail({
				from: 'lga.sig.khaled@gmail.com', // sender address
				to: 'khaled.abdulhalim.pro@gmail.com', // list of receivers
				subject: email.subject, // Subject line
				text: email.text, // plain text body
				html: `<h3><pre>${email.text}</pre></h3>` // html body
			});

			return info;
		} catch (error) {
			console.error(error.message);
		}
	}
};
