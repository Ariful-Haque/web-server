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

module.exports = middleware;