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
 * Creates a new post
 */
app.cmd(/ls/,scaffolder.ls);

/**
 * Creates a new post
 */
app.cmd(/rm ([0-9]+)/,scaffolder.rm);

/**
 * Creates a new post
 */
app.cmd(/publish ([0-9]+)/,scaffolder.publish);

/**
 * Creates a new post
 */
app.cmd(/unpublish ([0-9]+)/,scaffolder.unpublish);


/**
 * Builds the HTML
 */
app.cmd(/build/,builder.build);