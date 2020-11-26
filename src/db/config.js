let Sequelize = require('sequelize');

let { databases: { postgres } } = require('src/config');

module.exports = function getDefaultConfig() {
	let config = {
		database: postgres.dbName,
		dialect: postgres.dialect,
		port: Number(postgres.port),
		dialectOptions: {
			decimalNumbers: true,
		},
		pool: {
			max: 5,
			min: 0,
			idle: 10 * 1000,
			acquire: 10 * 1000,
		},
		logging: false, // unable to find errors in console, especially during data imports
		operatorsAliases: getOperatorAliases(),
	};

	if (postgres.replication.enabled) {
		config.replication = {
			write: postgres.replication.master,
			read: [postgres.replication.master],
		};
	} else {
		config.host = postgres.host;
		config.username = postgres.user;
		config.password = postgres.password;
	}

	return config;
};

function getOperatorAliases() {
	return {
		$eq: Sequelize.Op.eq,
		$ne: Sequelize.Op.ne,
		$gte: Sequelize.Op.gte,
		$gt: Sequelize.Op.gt,
		$lte: Sequelize.Op.lte,
		$lt: Sequelize.Op.lt,
		$not: Sequelize.Op.not,
		$in: Sequelize.Op.in,
		$notIn: Sequelize.Op.notIn,
		$is: Sequelize.Op.is,
		$like: Sequelize.Op.like,
		$notLike: Sequelize.Op.notLike,
		$iLike: Sequelize.Op.iLike,
		$notILike: Sequelize.Op.notILike,
		$regexp: Sequelize.Op.regexp,
		$notRegexp: Sequelize.Op.notRegexp,
		$iRegexp: Sequelize.Op.iRegexp,
		$notIRegexp: Sequelize.Op.notIRegexp,
		$between: Sequelize.Op.between,
		$notBetween: Sequelize.Op.notBetween,
		$overlap: Sequelize.Op.overlap,
		$contains: Sequelize.Op.contains,
		$contained: Sequelize.Op.contained,
		$adjacent: Sequelize.Op.adjacent,
		$strictLeft: Sequelize.Op.strictLeft,
		$strictRight: Sequelize.Op.strictRight,
		$noExtendRight: Sequelize.Op.noExtendRight,
		$noExtendLeft: Sequelize.Op.noExtendLeft,
		$and: Sequelize.Op.and,
		$or: Sequelize.Op.or,
		$any: Sequelize.Op.any,
		$all: Sequelize.Op.all,
		$values: Sequelize.Op.values,
		$col: Sequelize.Op.col,
	};
}
