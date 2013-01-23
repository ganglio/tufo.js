var db = exports;

var Storr = require('storr'),
    fs = require('fs');

db.create = function(db_path,name) {
	storr = new Storr(path.join(db_path,name,'tufo.json'));
	storr.set('blog_name',name,function(err){
		if (err) throw err;
		storr.save(function(err){
			if (err) throw err;
		})
	});
}

db.exists = function() {
	return fs.existsSync(path.join(__dirname,'tufo.json'));
}

db.set = function(key,value) {
	storr = new Storr('tufo.json');
	storr.set('key',value,function(err){
		if (err) throw err;
		storr.save(function(err){
			if (err) throw err;
		})
	});
}

db.get = function(key) {
	storr = new Storr('tufo.json');
	return storr.get(key,function(err){
		if (err) throw err;
	});
}

