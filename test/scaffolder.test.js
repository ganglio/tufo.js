var scaffolder = require('../lib/scaffolder'),
    utile = require("utile"),
    fs = require("fs"),
    vows = require('vows'),
    assert = require('assert'),
    path = require("path");

var base_path = path.join(__dirname,'tmp');

vows.describe('scaffolder').addBatch({
	'Testing methods': {
		topic: function() { return scaffolder; },
		'init()': {
			topic: function() {
				scaffolder.init('test_blog',this.callback,base_path);
			},
			'Async test':function(err) {
				assert.isTrue(err);

				fs.exists('test_blog',function(err){
					assert.isTrue(err);
					var name = require(path.join(base_path,'test_blog','tufo.json')).blog_name;
					assert.equal(name,'test_blog');
					utile.rimraf(path.join(base_path,'test_blog'),function(err){
						assert.isTrue(err);
					});
				});
			}
		},
		'newPost()': function(topic) {
			assert.isTrue(false);
		}
	}
}).export(module);