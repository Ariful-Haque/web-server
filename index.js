var express = require('express');
var app = express();
var middleware = require('./middleware');

var port = 8080;

var middleware = {
	checkAuthentication: function(req, res, next) {
		console.log('Checking Authorizat....');
		next();
	},
	logger: function(req, res, next) {
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' made on day: ' + new Date().toString());
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.checkAuthentication, function(req, res) {
	res.send('<h3>About Us</h3')
})

app.use(express.static(__dirname + '/public'));


app.listen(port, function() {
	console.log('Server is running on port: ' + port);
})