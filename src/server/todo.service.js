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

var items = [
		{id: 1, description: 'get paid'},
		{id: 2, description: 'get groceries'},
		{id: 3, description: 'get laid'},
		];

app.get('/items', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");
  	res.json(items);
});

app.listen(process.env.PORT || 8080);