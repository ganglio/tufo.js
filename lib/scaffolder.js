var scaffolder = exports;

var fs = require("fs"),
    path = require("path"),
    ncp = require("ncp").ncp,
    db = require("./db");

scaffolder.init = function(name) {
	var root = path.join(process.cwd(),name);
	var scaffold = path.join(__dirname,'..','scaffold');

	console.log('Creating blog'.yellow + ' ' + name);
	console.log('+ creating folder'.yellow + ' ' + root);
	ncp(scaffold,root,function (err) {
		if (err) {
			return console.error(err);
		}
		console.log('+ done!'.yellow);
		console.log('+ creating the posts database');
		db.create(root,name);
	});
}

scaffolder.newPost = function(title) {
	console.log('Creating post'.yellow + ' ' + title);
}