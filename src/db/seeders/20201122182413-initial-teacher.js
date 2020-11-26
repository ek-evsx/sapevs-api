'use strict';

let { INITIAL_TEACHER_ID } = require('./constants');

module.exports = {
	up: async queryInterface => {
		await queryInterface.bulkInsert('teachers', [{
			id: INITIAL_TEACHER_ID,
			firstName: 'Vadim',
			lastName: 'Gerasimovich',
			patronymic: 'Yurievich',
			email: 'gerasimovich@bsuir.by',
		}]);
	},

	down: () => {
		// no need in down method here
		return Promise.resolve();
	}
};
