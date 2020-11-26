let express = require('express');

let students = require('src/modules/students/router');

let router = new express.Router();

router.use('/students', students);

module.exports = router;
