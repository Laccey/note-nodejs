module.exports = app => {
    return class Note extends app.Service {
        async add() {
            const data = this.ctx.params.data;
            const result = await this.ctx.model.Note.create({ 'text': data });
            if (result.serverStatus == 2) {
                return result;
            } else {
                return "fail";
            }
        }

        async select() {
            const data = this.ctx.params.data;
            const result = await this.ctx.model.Note.findAll({
                where: {
                    text: data
                }
            });
            // this.ctx.body = `${result}`;
            if (result.serverStatus == 2) {
                return "success";
            } else {
                return "fail";
            }
        }
    }
};