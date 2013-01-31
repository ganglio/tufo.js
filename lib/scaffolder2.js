var scaffolder = exports;

var utile = require("utile"),
    path = require("path"),
    db = require("./db"),
    fs = require("fs");

scaffolder.json={};

scaffolder.init = function(blog,cb) {
	this.json["blog_name"] = blog;
	cb(true);
}

scaffolder.new = function(post,cb) {
	if (!this.json.posts)
		this.json.posts={};
	this.json.posts[post]=true;
	cb(true);
}

scaffolder.rm = function(index,cb) {
	var count=0;
	var deleted = false
	for (title in this.json.posts)
		if (++count == index) {
			delete(this.json.posts[title]);
			deleted = true;
		}
	cb(deleted);
}