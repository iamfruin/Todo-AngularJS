var express = require('express');
var app = express();

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

var items = [
		{id: 1, description: 'get paid'},
		{id: 2, description: 'get groceries'},
		{id: 3, description: 'get laid'},
		];

app.get('/items', function(req, res) {
  	res.json(items);
});

app.post('/items', function(req, res){
	console.log(req.body);
	var newItem = req.body;
	newItem.id = items.length + 1;
	items.push(newItem);
  	res.json(items);
});

app.listen(process.env.PORT || 8080);