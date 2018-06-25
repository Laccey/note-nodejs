module.exports = app => {
    return class Note extends app.Service {
        async add(noteId, data) {
            const result = await this.ctx.model.Notes.create({ 'noteId': noteId, 'text': data });
            console.log('-----------add result-----------------');
            console.log(result);
            if (result.dataValues) {
                return result;
            } else {
                return;
            }
            // return result;
        }

        async select() {
            const noteId = this.ctx.session.noteId;
            const result = await this.ctx.model.Notes.findAll({
                where: {
                    noteId: noteId
                }
            });
            if (result.length > 0) {
                return result[0].dataValues;
            } else {
                return;
            }
            // return result;
        }

        async update(noteId, data) {
            console.log('---------noteId---------------');
            console.log(noteId);
            const result = await this.ctx.model.Notes.update({
                text: data
            }, {
                    where: {
                        noteId: noteId
                    },
                })
            console.log('---------result---------------');
            console.log(result);
            if (result.length > 0) {
                return result;
            } else {
                return;
            }
            // return result;
        }
    }
};