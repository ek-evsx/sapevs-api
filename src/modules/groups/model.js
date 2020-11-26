let { DataTypes } = require('sequelize');

let mainDb = require('src/db');

let schema = {
	number: {
		type: DataTypes.INTEGER,
		required: true,
	},
	curatorId: {
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

let Group = mainDb.define(
	'groups',
	schema
);

module.exports = Group;
