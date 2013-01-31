var scaffolder = exports;

var utile = require("utile"),
    path = require("path"),
    db = require("./db"),
    fs = require("fs");

var root = null;

scaffolder.init = function(name,base_path,cb) {
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
	var ts = new Date();
	if (db.exists(root)) {
		var posts = db.get(root,"posts");
		if (!posts)
			posts = {};
		posts[title]={
			"created":ts,
			"published":false
		};
		db.set(root,'posts',posts);
		fs.writeFileSync(path.join(root,'sources',title+".md"),"#"+title);
	}
}

scaffolder.ls = function() {}

scaffolder.rm = function(index) {
	if (db.exists(root)) {
		var posts = db.get(root,"posts");
		console.log(posts);
	}
}

scaffolder.publish = function(index) {}

scaffolder.unpublish = function(index) {}