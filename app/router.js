'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.note.show);
	router.post('/add', controller.note.add);
	router.post('/update', controller.note.update);
	// router.get('/select/:id', controller.note.getNode);
	router.get('/:noteId', controller.note.getNode);
};
