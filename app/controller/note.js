const Controller = require('egg').Controller;

class NoteController extends Controller {
    async show() {
        await this.ctx.render('index.tpl');
    }

    async add() {
        const data = this.ctx.params.data;
        const result = await this.service.mysql.add(data);
        this.ctx.body = `success ok`;
    }

    async getNode() {
        const data = this.ctx.params.data;
        const result = await this.service.mysql.select(data);
        // console.log(result);
        // this.ctx.body = `${result}`;
        if(result){
            this.ctx.body = `${result}`;
        }else{
            await this.ctx.render('index.tpl');
            // this.ctx.body = `dd`;
        }
    }

}

module.exports = NoteController;