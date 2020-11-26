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
	email: {
		type: DataTypes.STRING,
		required: true,
    },
    age: {
		type: DataTypes.INTEGER,
		required: true,
    },
    groupId: {
        type: DataTypes.UUID,
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

let Student = mainDb.define(
	'students',
	schema
);

Group.hasOne(Student, {
	foreignKey: 'groupId'
});

Student.belongsTo(Group, {
	foreignKey: 'groupId'
});

module.exports = Student;
