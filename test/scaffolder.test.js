var scaffolder = require('../lib/scaffolder'),
    fs = require('fs'),
    vows = require('vows'),
    assert = require('assert');

function clean(blogname) {
	fs.rmdirSync(blogname);
}

vows.describe('scaffolder').addBatch({
	'Testing methods': {
		topic: function() { return scaffolder; },
		'init()': function(topic) {
			topic.init('test_blog',function(err){
				console.log('ga');
			});
			console.log('gu');
			return false;
		}
	}
}).export(module);