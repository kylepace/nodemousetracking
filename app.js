var express = require('express')
	, app = express()
	, http = require('http')
	, server = http.createServer(app)
	, engine = require('ejs-locals')
	, io = require('socket.io').listen(server);

app.configure(function() {
	app.engine('ejs', engine);
	app.use('/public', express.static(__dirname + '/public'));
	app.set('view engine', 'ejs');
});

app.get('/', function(req, res) {
	res.render('index');
});

io.sockets.on('connection', function(socket) {
	socket.on('tracking mouse', function(data) {
		console.log(data);
	});
});

server.listen(3000);
console.log('Listening on port 3000.');