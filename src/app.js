const express = require('express');
const cors = require('cors');

const contactRoutes = require('./routes/contact.routes');
const { notFound } = require('./middleware/notFound');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.disable('x-powered-by');

app.use(express.json({ limit: '10kb' }));

const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.length === 0) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.get('/health', (req, res) => {
	res.json({ success: true, message: 'OK' });
});

app.use('/api/contacts', contactRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;

