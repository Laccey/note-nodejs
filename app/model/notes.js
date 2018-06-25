module.exports = app => {
	const { STRING, DATE } = app.Sequelize;

	const Notes = app.model.define("notes", {
		noteId: STRING,
		text: STRING,
		created_at: DATE,
		updated_at: DATE
	});

	return Notes;
};