var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('tododb', ['items']);

app.use(express.methodOverride());
var allowCrossDomain = function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,X-Requested-With');
	if ('OPTIONS' == req.method) {
		res.send(200);
	} else {
		next();
	};
};
app.use(allowCrossDomain);
app.use(express.bodyParser());

app.get('/items', function(req, res) {
	db.items.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});  	
});

app.post('/items', function(req, res){
	console.log(req.body);
	var newItem = req.body;
	db.items.save(newItem);
  	db.items.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});  	
});

app.listen(process.env.PORT || 8080);