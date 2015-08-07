var express = require('express');
//var http = require("http");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'vash');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
	res.render('index');
});

// var server = http.createServer(app);

// server.listen(3000);

var port = process.env.PORT || 3000;
app.listen(port);

