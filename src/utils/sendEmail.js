const { getTransporter } = require('../config/mail');

async function sendEmail({ to, subject, text, html }) {
	const from = process.env.MAIL_FROM;
	if (!from) {
		throw new Error('MAIL_FROM is not set');
	}

	if (!to) {
		throw new Error('Email "to" is required');
	}

	const transporter = getTransporter();

	return transporter.sendMail({
		from,
		to,
		subject,
		text,
		html,
	});
}

module.exports = { sendEmail };

