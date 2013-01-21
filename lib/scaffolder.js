var scaffolder = exports;

scaffolder.init = function(name){
	console.log('Creating blog'.yellow + ' ' + name);
}

scaffolder.newPost = function(title){
	console.log('Creating post'.yellow + ' ' + title);
}