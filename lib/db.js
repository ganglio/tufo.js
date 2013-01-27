var db = exports;

var closet = require('closet'),
    fs = require('fs');

db.create = function(db_path,name) {
	closet.init(path.join(db_path,name,'tufo.json'));
	closet.set('blog_name',name);
	closet.persist();
}

db.exists = function() {
	return fs.existsSync(path.join(__dirname,'tufo.json'));
}

db.set = function(key,value) {
	closet.init('tufo.json');
	closet.set(key,value);
	closet.persist();
}

db.get = function(key) {
	closet.init('tufo.json');
	return closet.get(key);
}

