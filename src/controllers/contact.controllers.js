const validator = require('validator');

const Contact = require('../models/contact');
const { sendEmail } = require('../utils/sendEmail');

function validateContactInput({ name, email, message }) {
	const errors = [];

	if (typeof name !== 'string' || validator.isEmpty(name.trim())) {
		errors.push({ field: 'name', message: 'Name is required.' });
	} else if (name.trim().length < 2 || name.trim().length > 100) {
		errors.push({ field: 'name', message: 'Name must be 2-100 characters.' });
	}

	if (typeof email !== 'string' || validator.isEmpty(email.trim())) {
		errors.push({ field: 'email', message: 'Email is required.' });
	} else if (!validator.isEmail(email.trim())) {
		errors.push({ field: 'email', message: 'Email must be a valid email address.' });
	}

	if (typeof message !== 'string' || validator.isEmpty(message.trim())) {
		errors.push({ field: 'message', message: 'Message is required.' });
	} else if (message.trim().length < 5 || message.trim().length > 5000) {
		errors.push({ field: 'message', message: 'Message must be 5-5000 characters.' });
	}

	return errors;
}

async function submitContact(req, res, next) {
	try {
		const { name, email, message } = req.body || {};
		const errors = validateContactInput({ name, email, message });

		if (errors.length > 0) {
			return res.status(400).json({
				success: false,
				message: 'Validation failed.',
				errors,
			});
		}

		const contact = await Contact.create({
			name: name.trim(),
			email: email.trim().toLowerCase(),
			message: message.trim(),
			meta: {
				ip: req.ip || null,
				userAgent: req.get('user-agent') || null,
			},
		});

		let emailSent = false;
		try {
			await sendEmail({
				to: contact.email,
				subject: 'We received your message',
				text: `Hi ${contact.name},\n\nThanks for reaching out. We’ve received your message and our team will get back to you soon.\n\n— PriyaQubit`,
			});
			emailSent = true;
		} catch (emailError) {
			console.error('Confirmation email failed:', emailError);
		}

		return res.status(201).json({
			success: true,
			message: 'Your message has been submitted successfully.',
			data: {
				id: contact._id,
				createdAt: contact.createdAt,
				emailSent,
			},
		});
	} catch (error) {
		return next(error);
	}
}

module.exports = { submitContact };

