'use strict';

module.exports = {
	up: async(queryInterface, Sequelize) => {
		let studentShema = {
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
      email: {
        type: Sequelize.STRING,
        required: true,
        },
      age: {
        type: Sequelize.INTEGER,
        required: true,
        },
      groupId: {
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

		await queryInterface.createTable('students', studentShema);
	},

	down: async queryInterface => {
		await queryInterface.dropTable('students');
	}
};
