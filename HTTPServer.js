var through = require("through2");
var http = require("http");
var portNum = parseInt(process.argv[2]);

var server = http.createServer(function(req, res) {
	if (req.method === "GET") {
		console.log("Need POST request.");
	}
	if (req.method === "POST") {
		req.pipe(through(function(buffer, _, next) {
			this.push(buffer.toString().toUpperCase());
			next();
		})).pipe(res);
	}
});
server.listen(portNum);