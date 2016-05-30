var express = require('express');
var app = express();
var middleware = require('./middleware');

var port = 8080;


// this is application layer middleware
app.use(middleware.logger);

app.get('/about', middleware.checkAuthentication, function(req, res) {
	res.send('<h3>About Us</h3')
})

app.use(express.static(__dirname + '/public'));


app.listen(port, function() {
	console.log('Server is running on port: ' + port);
})