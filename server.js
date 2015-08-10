var express = require('express');
var mongoose = require('mongoose');
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

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/jobfinder');

var con = mongoose.connection;

con.once('open', function(){
	console.log('connected to mongodb successfully!');
});

var port = process.env.PORT || 3000;
app.listen(port);

