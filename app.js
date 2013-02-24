var express = require('express')
	, app = express()
	, http = require('http')
	, server = http.createServer(app)
	, engine = require('ejs-locals')
	, io = require('socket.io').listen(server)
	, mongoose = require('mongoose')
	, config = require('./config')
	, mousePosition = require('./lib/mousePosition');

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
		mousePosition.create(data.pageX, data.pageY, data.clientX, data.clientY, data.sessionId);
	});
});

mongoose.connect(config.mongo.connection);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {

	server.listen(3000);

	console.log('Listening on port 3000.');
});