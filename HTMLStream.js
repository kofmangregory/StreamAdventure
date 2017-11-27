var trumpet = require("trumpet");
var tr = trumpet();
var through = require("through");

var stream = tr.select(".loud").createStream();

stream.pipe(through(function(buffer) {
	this.queue(buffer.toString().toUpperCase());
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);