var vows = require('vows'),
		assert = require('assert'),
		flatiron = require('flatiron'),
		app = require('../lib/app');

vows.describe('app').addBatch({
	'The app should be a flatiron app': {
		topic: function(){ return app; },

		'is a flatiron app': function(topic) {
			assert.equal(topic, flatiron.app);
		}
	}
}).export(module);