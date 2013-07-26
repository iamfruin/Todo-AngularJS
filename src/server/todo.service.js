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
		{description: 'get paid'},
		{description: 'get groceries'},
		{description: 'get laid'},
		];

app.get('/items', function(req, res) {
  	res.json(items);
});

app.post('/items', function(req, res){
	console.log(req.body);
	items.push(req.body);
  	res.json(items);
});

app.listen(process.env.PORT || 8080);