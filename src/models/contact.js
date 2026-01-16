const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			minlength: 2,
			maxlength: 100,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
			maxlength: 254,
		},
		message: {
			type: String,
			required: true,
			trim: true,
			minlength: 5,
			maxlength: 5000,
		},
		meta: {
			ip: { type: String, default: null },
			userAgent: { type: String, default: null },
		},
	},
	{ timestamps: true }
);

contactSchema.index({ createdAt: -1 });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

