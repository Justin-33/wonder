const { ErrorCode } = require('../constants/ErrorCodes');
// const { ErrorLog } = require('./ErrorLog');

/**
 * Handles undefined route errors
 * @param {import('express').Request} req Express request
 * @param {import('express').Response} res Express response
 * @returns {Promise<import('express').Response>}
 */
const handleRouteError = async (req, res) => {
  return res.status(404).json({
    errors: {
      message: 'Invalid route. See documentation.',
      error: {
        status: 404,
      },
    },
  });
};

/**
 * Handles errors based on response codes.
 * Advantage is, here, we can decide to report specific error types
 * For now, we're only reporting 500
 * @param {Error} err Custom error object
 * @param {import('express').Response} res Express response handler
 * @returns {import('express').Response}
 */
const handleErrorResponse = (err, res) => {
  const { message, code } = err;

  if (code === ErrorCode.SERVER_ERROR || code === undefined) {
    console.log(err);

    return res.status(500).json({
      code: ErrorCode.SERVER_ERROR,
      message: 'An unexpected internal server error occurred',
      data: err.stack,
    });
  }

  switch (code) {
    case ErrorCode.FORBIDDEN:
      return res.status(403).json({
        ...err,
        message: message || 'Unauthorized endpoint access',
      });
    case ErrorCode.BAD_REQUEST:
      return res.status(400).json({
        ...err,
        message: message || 'Some important parameters are missing. See documentation',
      });
    case ErrorCode.RESOURCE_NOT_FOUND:
      return res.status(404).json(err);
    default:
      return res.status(503).json(err);
  }
};

module.exports = {
  handleRouteError,
  handleErrorResponse,
};
