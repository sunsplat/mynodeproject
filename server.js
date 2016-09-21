var express = require('express');
// find the ports
// where are things listening?
var port = process.env.PORT || 3000;
//check if the environment is the developer environment OR do work on port 3000

var app = express();

app.use(express.static(__dirname + '/public'));
// two underscores before dirname
//public directory doesn't exist yet so create one.

app.listen(port, function() {
	console.log('Server is up and running on ' + port);
});
// listen on this port(3000) and if it runs, console.log the msg

// to run this file, go to terminal and type:
// $ node server.js