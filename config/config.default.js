'use strict';

module.exports = appInfo => {
	const config = exports = {
		view: {
			defaultViewEngine: 'nunjucks',
			mapping: {
				'.tpl': 'nunjucks'
			}
		},
		mysql: {
			client: {
				host: 'localhost',
				port: '3306',
				user: 'root',
				password: 'liangxu123',
				database: 'note'
			},
			app: true,
			agent: false
		}
	};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1526627500420_542';

	// add your config here
	config.middleware = [];

	return config;
};
