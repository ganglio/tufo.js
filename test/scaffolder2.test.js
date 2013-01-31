var scaffolder = require('../lib/scaffolder2'),
    utile = require("utile"),
    fs = require("fs"),
    vows = require('vows'),
    assert = require('assert'),
    path = require("path");

var base_path = path.join(__dirname,'tmp');

vows.describe('scaffolder').addBatch({
	'We start with init()': {
		topic: function() {
			scaffolder.init('blog',this.callback);
		},
		'creating a blog': function(init_result) {
			assert.isTrue(init_result);
			assert.equal(scaffolder.json.blog_name,'blog');
		},
		'then we do new()': {
			topic: function() {
				scaffolder.new('post',this.callback);
			},
			'adding a post': function(newpost_result) {
				assert.isTrue(newpost_result);
				assert.include(scaffolder.json.posts,'post');
			},
			'then we do rm()': {
				topic: function() {
					scaffolder.rm(1,this.callback);
				},
				'removing the post': function(rm_result) {
					assert.isTrue(rm_result)
				},
				'then we clean the mess': {
					topic: function() {
						this.callback(true);
					},
					'and we are done': function(clean_result) {
						assert.isTrue(clean_result);
					}
				}
			}
		}
	}
}).export(module);