'use strict';

module.exports = {
	up: async(queryInterface, Sequelize) => {
		let groupShema = {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
			},
      number: {
        type: Sequelize.INTEGER,
        required: true,
      },
      curatorId: {
        type: Sequelize.UUID,
        required: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        required: true,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        required: true,
        defaultValue: new Date()
      },
		};

		await queryInterface.createTable('groups', groupShema);
	},

	down: async queryInterface => {
		await queryInterface.dropTable('groups');
	}
};
