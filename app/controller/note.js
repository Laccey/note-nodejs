const Controller = require('egg').Controller;

class NoteController extends Controller {
    async show() {
        await this.ctx.render('index.tpl');
    }

    async add() {
        // const data = this.ctx.params.data;
        // const result = yield this.service.mysql.add(data);
        // this.ctx.body = 'success';
        console.log('add');
    }

}

module.exports = NoteController;