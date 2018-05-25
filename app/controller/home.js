'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {
		this.ctx.body = 'hello egg';
		// this.ctx.render('index.tpl');
	}
	async add() {
		const data = this.ctx.params.data;
		const result = this.service.mysql.add(data);
		this.ctx.body = 'success';
	}
}

module.exports = HomeController;
