var db = exports;

var closet = require('closet'),
    fs = require('fs'),
    path = require('path');

db.create = function(db_path,name,cb) {
	var tufo_db = path.join(db_path,'tufo.json');

	closet
		.init(tufo_db)
		.set('blog_name',name)
		.persist();
}

db.exists = function(db_path) {
	return fs.existsSync(path.join(db_path,'tufo.json'));
}

db.set = function(db_path,key,value) {
	closet
		.init(path.join(db_path,'tufo.json'))
		.set(key,value)
		.persist();
}

db.get = function(db_path,key) {
	return closet
		.init(path.join(db_path,'tufo.json'))
		.get(key);
}

