var scaffolder = require('../lib/scaffolder'),
    utile = require("utile"),
    fs = require("fs"),
    vows = require('vows'),
    assert = require('assert'),
    path = require("path");

var base_path = path.join(__dirname,'tmp');

vows.describe('scaffolder').addBatch({
	'Testing methods': {
		'asynchronously': {
			topic: function() {
				scaffolder.init('test_blog',this.callback,base_path);
			},
			'init()':function(err) {
				if (!err) assert.isTrue(err);
				fs.exists(path.join(base_path,'test_blog'),function(err){
					if (!err) return assert.isTrue(err);
					var name = require(path.join(base_path,'test_blog','tufo.json')).blog_name;
					assert.equal(name,'test_blog');
				});
			},
			'newPost()': function(err) {
				assert.isTrue(err);
				scaffolder.newPost('the title');
				var posts = require(path.join(base_path,'test_blog','tufo.json')).posts;
				assert.isObject(posts);
				assert.include(posts,'the title');
			},
			'then clean the mess': function(err) {
				utile.rimraf(path.join(base_path,'test_blog'),function(err){
					fs.rmdirSync(path.join(base_path,'test_blog'));
				});
			}
		}
	}
}).export(module);