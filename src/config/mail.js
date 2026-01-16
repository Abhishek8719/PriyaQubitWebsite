const nodemailer = require('nodemailer');

function getTransporter() {
	const host = process.env.SMTP_HOST;
	const port = Number(process.env.SMTP_PORT || 587);
	const user = process.env.SMTP_USER;
	const pass = process.env.SMTP_PASS;

	if (!host || !user || !pass) {
		throw new Error('SMTP_HOST/SMTP_USER/SMTP_PASS are not set');
	}

	const secure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' || port === 465;

	return nodemailer.createTransport({
		host,
		port,
		secure,
		auth: { user, pass },
	});
}

module.exports = { getTransporter };

