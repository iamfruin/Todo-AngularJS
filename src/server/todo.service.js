var http = require('http');

var restify = require('restify');

var server = restify.createServer({
	name: 'todolist',
	version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/', function (req, res, next) {
	res.setHeader('content-type', 'text/plain');
	res.send('Welcome to the To Do List Api');
	return next();
});

server.get('/items', function (req, res, next) {
	res.contentType = 'json';
	res.send(200, {items: [
		{id: 1, description: 'get paid'},
		{id: 2, description: 'get groceries'},
		{id: 3, description: 'get laid'},
		]});
	return next();
});

server.listen(8080, function () {
	console.log('%s listening at %s', server.name, server.url);
})