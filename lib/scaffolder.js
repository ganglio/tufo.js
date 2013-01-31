var scaffolder = exports;

var utile = require("utile"),
    path = require("path"),
    db = require("./db");

var root = null;

scaffolder.init = function(name,cb,base_path) {
	var scaffold = path.join(__dirname,'..','scaffold');

	root = base_path ? path.join(base_path,name) : path.join(process.cwd(),name);

	utile.cpr.errs=["pippo"];
	utile.cpr(scaffold,root,function(err){
		if (err && cb) return cb(err);
		db.create(root,name,cb);
		if (cb) cb(true);
	});
}

scaffolder.newPost = function(title) {
	if (db.exists(root)) {
		var posts = db.get(root,"posts");
		if (!posts)
			posts = {};
		posts[title]={
			"created":new Date()
		};
		db.set(root,'posts',posts);
	}
}

scaffolder.ls = function() {
	console.log('Listing posts'.yellow);
}

scaffolder.rm = function(index) {
	console.log('Deleting post'.yellow + ' ' + index);
}

scaffolder.publish = function(index) {
	console.log('Publishing post'.yellow + ' ' + index);
}

scaffolder.unpublish = function(index) {
	console.log('Unpublishing post'.yellow + ' ' + index);
}