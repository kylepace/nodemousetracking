var express = require('express')
	, engine = require('ejs-locals');

var app = express();

app.configure(function() {
	app.engine('ejs', engine);
	app.use('/public', express.static(__dirname + '/public'));
	app.set('view engine', 'ejs');
});

app.get('/', function(req, res) {
	res.send('Hello there');
});

app.get('/admin', function(req, res) {
	res.render('admin/index');
});

app.listen(3000);
console.log('Listening on port 3000.');