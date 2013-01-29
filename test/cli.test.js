var vows = require('vows'),
		assert = require('assert'),
		flatiron = require('flatiron'),
		cli = require('../lib/cli'),
		scaffolder = require('../lib/scaffolder'),
		builder = require('../lib/builder');

vows.describe('CLI').addBatch({
	'The CLI should be a flatiron app': {
		topic: function(){ return cli; },

		'is a flatiron app': function(topic) {
			assert.equal(topic, flatiron.app);
		}
	},
	'The CLI registers all the correct scaffolding routes': {
		topic: function(){ return cli; },

		'for the scaffolding module': {
			'init': function(topic) {
				assert.equal(topic.router.routes.init['(.+)'].on,scaffolder.init);
			},
			'new': function(topic) {
				assert.equal(topic.router.routes.new['(.+)'].on,scaffolder.newPost);
			},
			'ls': function(topic) {
				assert.equal(topic.router.routes.ls.on,scaffolder.ls);
			},
			'rm': function(topic) {
				assert.equal(topic.router.routes.rm['([0-9]+)'].on,scaffolder.rm);
			},
			'publish': function(topic) {
				assert.equal(topic.router.routes.publish['([0-9]+)'].on,scaffolder.publish);
			},
			'unpublish': function(topic) {
				assert.equal(topic.router.routes.unpublish['([0-9]+)'].on,scaffolder.unpublish);
			}
		},

		'for the builder module': {
			'has build': function(topic) {
				assert.equal(topic.router.routes.build.on,builder.build);
			}
		}
	}
}).export(module);