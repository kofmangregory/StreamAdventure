var split = require("split");
var through = require("through2");
var count = 1;
process.stdin.pipe(split(/\n/)).pipe(through(function (line, _, next) {
		if (count % 2 != 0) {
			this.push(line.toString().toLowerCase() + "\n");
			count++;
			next();
		}
		else {
			this.push(line.toString().toUpperCase() + "\n");
			count++;
			next();
		}
	})).pipe(process.stdout);