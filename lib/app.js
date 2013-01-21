/**
 * Dependencies.
 */
var flatiron = require('flatiron');

/**
 * Application.
 *
 * @type {Object}
 */
var app = module.exports = flatiron.app;

app.use(flatiron.plugins.cli, {
	usage: [
		'',
		'tufo - An tiny blog engine with static html pages and markdown contents.',
		'',
		'Usage:',
		'',
		'       tufo init my blog - Creates a new blog',
		'       tufo new a post   - Creates a new post',
		'       tufo build        - Builds the HTML',
		'',
		'Author: Roberto Torella <roberto.torella@gmail.com>',
		''
	]
});