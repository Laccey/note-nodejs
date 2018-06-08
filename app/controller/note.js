const Controller = require('egg').Controller;

class NoteController extends Controller {
    async show() {
        await this.ctx.render('index.tpl');
    }

    async add() {
        const noteId = this.ctx.session.noteId;
        let ctx = this.ctx;
        let body = ctx.request.body;
        let data = body.text;
        const result = await this.service.mysql.add(noteId, data);
        if (result) {
            return ctx.body = {
                success: 1,
                msg: '添加成功！'
            }
        } else {
            return ctx.body = {
                success: 0,
                msg: '添加失败！'
            }
        }
    }

    async update() {
        const noteId = this.ctx.session.noteId;
        console.log('---------noteId1---------------');
        console.log(noteId);
        let ctx = this.ctx;
        let body = ctx.request.body;
        let data = body.text;
        const result = await this.service.mysql.update(noteId, data);
        if (result) {
            return ctx.body = {
                success: 1,
                msg: '更新成功！'
            }
        } else {
            return ctx.body = {
                success: 0,
                msg: '更新失败！'
            }
        }
    }

    async getNode() {
        const noteId = this.ctx.params.noteId;
        this.ctx.session.noteId = noteId;
        const result = await this.service.mysql.select(noteId);
        if (result) {
            // this.ctx.body = `${result.text}`;
            await this.ctx.render('edit.tpl',{text:result.text});
        } else {
            await this.ctx.render('index.tpl');
        }
    }

}

module.exports = NoteController;