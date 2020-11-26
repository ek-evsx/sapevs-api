let repository = require('./repository');

module.exports = {
	create,
	getAll,
	getOne,
	remove,
	update,
	idParamMiddleware,
};

function getAll(req, res, next) {
	return repository.getAll()
		.then(res.success)
		.catch(next);
}

function remove(req, res, next) {
	return repository.removeById(req.params.id)
		.then(res.success)
		.catch(next);
}

function update(req, res, next) {
	return repository.updateById(req.params.id, req.body)
		.then(res.success)
		.catch(next);
}

function create(req, res, next) {
	return repository.create(req.body)
		.then(res.success)
		.catch(next);
}

function idParamMiddleware(req, res, next) {
	return repository.getById(req.params.id)
		.then(student => {
			if (!student) {
				return res.notFound();
			}

			res.locals.student = student;

			return next();
		})
		.catch(next);
}

async function getOne(req, res, next) {
	try {
		return res.success(res.locals.student);
	} catch (error) {
		next(error);
	}
}
