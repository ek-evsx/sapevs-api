let Sequelize = require('sequelize');
let generateId = require('src/utils/generate-id');

let getSequelizeConfig = require('./config');

let sequelizeConfig = getSequelizeConfig();

let mainDb = new Sequelize(
	sequelizeConfig.database,
	sequelizeConfig.username,
	sequelizeConfig.password,
	sequelizeConfig,
);

module.exports = init(mainDb);

function init(orm) {
	// replace default ID generator
	let standardDefine = orm.define.bind(orm);

	// eslint-disable-next-line no-param-reassign
	orm.define = (name, schema, options) => {
		// eslint-disable-next-line no-param-reassign
		// set id field to each entity.
		schema.id = {
			type: Sequelize.DataTypes.UUID,
			primaryKey: true,
		};

		let model = standardDefine(name, schema, options);

		generateIdMixin(model);

		return model;
	};

	return orm;
}

function generateIdMixin(model = {}) {
	let idFieldName = model.primaryKeyAttribute;

	let generateIdHook = record => {
		// eslint-disable-next-line no-param-reassign
		record[idFieldName] = generateId();
	};

	model.addHook('beforeCreate', generateIdHook);
}
