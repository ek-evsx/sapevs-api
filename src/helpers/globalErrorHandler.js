let config = require('src/config');

module.exports = (err, req, res, next) => { // eslint-disable-line no-unused-vars
	let error = err;

	// internal server error
	if (err.innerError) {
		error = err.innerError;
	}

	let isNotFoundError = error.statusCode === 404;

	if (!isNotFoundError) {
		console.error('****************************');
		console.error('', error);
		console.error('***************************');
	}

	if (error.errorCode) {
		res.status(400).json({
			errors: [{
				message: error.description,
				errorCode: error.errorCode,
				field: error.field,
			}],
		});
	} else if (error.statusCode) {
		res.status(error.statusCode).json(error.message);
	} else {
		// no stacktraces leaked to non-dev users

		res.status(error.status || 500).json({
			errors: [{
				message: error.message,
				errorCode: 1,
				stacktrace: error,
			}],
		});
	}
};
