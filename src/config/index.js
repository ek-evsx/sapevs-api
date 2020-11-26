module.exports = {
    port: '5657',
    databases: {
		postgres: {
			replication: {
				enabled: false,
			},
			sslEnabled: false,
			dbName: 'sapevs',
			dialect: 'postgres',
			port: 5432,
			host: 'localhost',
            user: 'evs-admin',
			password: 'super-secure-password',
		}
	},
};
