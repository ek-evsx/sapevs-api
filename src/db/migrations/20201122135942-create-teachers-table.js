'use strict';

module.exports = {
	up: async(queryInterface, Sequelize) => {
		let teacherShema = {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
			},
      firstName: {
        type: Sequelize.STRING,
        required: true,
        },
      lastName: {
        type: Sequelize.STRING,
        required: true,
      },
      patronymic: {
        type: Sequelize.STRING,
        required: true,
      },
      email: {
        type: Sequelize.STRING,
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

		await queryInterface.createTable('teachers', teacherShema);
	},

	down: async queryInterface => {
		await queryInterface.dropTable('teachers');
	}
};
