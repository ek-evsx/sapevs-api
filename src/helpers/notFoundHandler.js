module.exports = (req, res, next) => {
	let err = new Error('Not Found');

	err.statusCode = 404;

	next(err);
};
