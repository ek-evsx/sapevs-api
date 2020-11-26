'use strict';

let generateId = require('src/utils/generate-id');

let { INITIAL_TEACHER_ID } = require('./constants');

module.exports = {
	up: async queryInterface => {
		await queryInterface.bulkInsert('groups', [{
      		id: generateId(),
			curatorId: INITIAL_TEACHER_ID,
			number: 750701,
		}]);
	},

	down: () => {
		// no need in down method here
		return Promise.resolve();
	}
};
