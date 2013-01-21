/**
 * Application.
 *
 * @type {Object}
 */
var app = module.exports = require('./app');

/**
 * Scaffolder.
 *
 * @type {Object}
 */
var scaffolder = require('./scaffolder');

/**
 * Builder.
 *
 * @type {Object}
 */
var builder = require('./builder');

/**
 * Creates a new blog
 */
app.cmd(/init (.+)/,scaffolder.init);

/**
 * Creates a new post
 */
app.cmd(/new (.+)/,scaffolder.newPost);

/**
 * Builds the HTML
 */
app.cmd(/build/,builder.build);