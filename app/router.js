'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.note.show);
	router.get('/add/:data', controller.note.add);
	router.get('/select/:id', controller.note.getNode);
	router.get('/:noteid', controller.note.getNode);
};
