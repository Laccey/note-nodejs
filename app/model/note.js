module.exports = app => {
	const { STRING, INTEGER, DATE } = app.Sequelize;

	const Note = app.model.define("note", {
		id: {
			type: INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		text: STRING,
		created_at: DATE,
		updated_at: DATE
	});

	return Note;
};