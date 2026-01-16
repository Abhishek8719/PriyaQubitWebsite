require('dotenv').config();

const app = require('./app');
const { connectDB } = require('./config/db');

const PORT = Number(process.env.PORT) || 5000;

let server;

/**
 * Handle uncaught sync errors
 */
process.on('uncaughtException', (error) => {
	console.error('Uncaught Exception:', error);
	shutdown();
});

/**
 * Handle rejected promises
 */
process.on('unhandledRejection', (error) => {
	console.error('Unhandled Rejection:', error);
	shutdown();
});

/**
 * Graceful shutdown
 */
function shutdown() {
	if (server) {
		server.close(() => {
			console.log('Server closed gracefully');
			process.exit(1);
		});
	} else {
		process.exit(1);
	}
}

async function start() {
	try {
		const connection = await connectDB();
		console.log(`MongoDB connected: ${connection.host}`);

		server = app.listen(PORT, () => {
			console.log(`API listening on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error('Failed to start server:', error);
		process.exit(1);
	}
}

/**
 * Handle CTRL + C and nodemon restarts
 */
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

start();
