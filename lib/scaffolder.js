var scaffolder = exports;

var utile = require("utile"),
    path = require("path"),
    db = require("./db");

scaffolder.init = function(name,cb,base_path) {
	var root = base_path ? path.join(process.cwd(),base_path,name) : path.join(process.cwd(),name);
	var scaffold = path.join(__dirname,'..','scaffold');

	cb(root);

	/*utile.cpr(scaffold,root,function(err,files){
		if (err && cb) return cb(err);

		db.create(process.cwd(),name);

		if (cb) cb(true);
	});//*/
}

scaffolder.newPost = function(title) {
	console.log('Creating post'.yellow + ' ' + title);
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