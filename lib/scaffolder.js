var scaffolder = exports;

var fs = require("fs.extra"),
    path = require("path"),
    db = require("./db");

scaffolder.init = function(name,cb) {
	var root = path.join(process.cwd(),name);
	var scaffold = path.join(__dirname,'..','scaffold');

	console.log(scaffold);

	fs.copyRecursive(scaffold,root,function(err){
		cb("gugul");
	});
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