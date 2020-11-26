let express = require('express');

let controller = require('./controller');

let router = express.Router();

router.param('id', controller.idParamMiddleware);

router.route('/')
	.get(controller.getAll)
	.post(controller.create);

router.route('/:id')
	.get(controller.getOne)
	.put(controller.update)
	.delete(controller.remove);

module.exports = router;
