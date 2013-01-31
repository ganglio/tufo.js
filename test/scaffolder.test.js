var scaffolder = require('../lib/scaffolder'),
    utile = require("utile"),
    fs = require("fs"),
    vows = require('vows'),
    assert = require('assert'),
    path = require("path");

var base_path = path.join(__dirname,'tmp');

vows.describe('scaffolder').addBatch({
	'Testing methods': {
		topic: function() {
			scaffolder.init('test_blog',base_path,this.callback);
		},
		'init()':function(err) {
			assert.isTrue(err);
			fs.exists(path.join(base_path,'test_blog'),function(err){
				if (!err) return assert.isTrue(err);
				var name = require(path.join(base_path,'test_blog','tufo.json')).blog_name;
				assert.equal(name,'test_blog');
			});
		},
		'rm()': function(err) {
			assert.isTrue(err);
			scaffolder.newPost('post 2');
			scaffolder.newPost('post 3');
			scaffolder.newPost('post 4');
			scaffolder.rm(3);
			var posts = require(path.join(base_path,'test_blog','tufo.json')).posts;
			assert.isObject(posts['post 3']);
			assert.isUndefined(posts['post 3']);
			fs.exists(path.join(base_path,'test_blog','sources','post 3.md'),function(err){
				assert.isFalse(err);
			});
		},
		/*'newPost()': function(err) {
			assert.isTrue(err);
			scaffolder.newPost('the title');
			var posts = require(path.join(base_path,'test_blog','tufo.json')).posts;
			assert.isObject(posts);
			assert.include(posts,'the title');
			fs.exists(path.join(base_path,'test_blog','sources','the title.md'),function(err){
				assert.isTrue(err);
			});
		},//*/
		'then clean the mess': function(err) {
			utile.rimraf(path.join(base_path,'test_blog'),function(err){
				assert.isTrue(err);
			});
		}
	}
}).export(module);