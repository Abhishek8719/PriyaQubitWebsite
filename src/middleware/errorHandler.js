function errorHandler(err, req, res, next) {
  const statusCode = Number(err.statusCode || err.status || 500);

  const isProduction = String(process.env.NODE_ENV || '').toLowerCase() === 'production';

  // Mongoose duplicate key
  if (err && err.code === 11000) {
    const fields = err.keyValue ? Object.keys(err.keyValue) : [];
    return res.status(409).json({
      success: false,
      message: 'Duplicate value error.',
      errors: fields.map((field) => ({ field, message: `${field} already exists.` })),
    });
  }

  // Mongoose validation errors
  if (err && err.name === 'ValidationError' && err.errors) {
    const errors = Object.values(err.errors).map((e) => ({
      field: e.path,
      message: e.message,
    }));

    return res.status(400).json({
      success: false,
      message: 'Validation failed.',
      errors,
    });
  }

  const payload = {
    success: false,
    message: err && err.message ? err.message : 'Internal server error.',
  };

  if (!isProduction) {
    payload.stack = err && err.stack ? err.stack : undefined;
  }

  return res.status(statusCode).json(payload);
}

module.exports = { errorHandler };
