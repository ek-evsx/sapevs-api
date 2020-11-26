let { DataTypes } = require('sequelize');

let mainDb = require('src/db');
let Group = require('src/modules/groups/model');

let schema = {
	firstName: {
		type: DataTypes.STRING,
		required: true,
    },
    lastName: {
		type: DataTypes.STRING,
		required: true,
	},
	patronymic: {
		type: DataTypes.STRING,
		required: true,
	},
	email: {
		type: DataTypes.STRING,
		required: true,
	},
	createdAt: {
		type: DataTypes.DATE,
		required: true,
		defaultValue: new Date()
	},
	updatedAt: {
		type: DataTypes.DATE,
		required: true,
		defaultValue: new Date()
	},
};

let Teacher = mainDb.define(
	'teachers',
	schema
);

Group.belongsTo(Teacher, {
	foreignKey: 'curatorId'
});

Teacher.hasOne(Group, {
	foreignKey: 'curatorId'
});

module.exports = Teacher;
