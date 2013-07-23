var restify = require('restify');
var server = restify.createServer({
	name: 'todolist',
	version: '1.0.0'
});
server.use(restify.bodyParser());

var items =  [
		{id: 1, description: 'get paid'},
		{id: 2, description: 'get groceries'},
		{id: 3, description: 'get laid'},
		];

function getItems (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Max-Age", "86400");
	res.contentType = 'json';
	res.send(200, items);
	return next();
};

server.get('/items', getItems);

server.listen(8080, function () {
	console.log('%s listening at %s', server.name, server.url);
})