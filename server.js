var express = require('express');
//var mongoose = require('mongoose');
var jobModel = require('./models/jobs.js');
var jobsData = require('./jobs-data.js');
//var http = require("http");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'vash');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res){
	
	jobsData.findJobs({}).then(
			function(collection){
				res.send(collection);
			}
		);

	// mongoose.model('Job').find({}).exec(function(error, collection){
	// 	res.send(collection);
	// });
});

app.get('*', function(req, res){
	res.render('index');
});

//mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/jobfinder');

jobsData.connectDB(process.env.MONGOLAB_URI || 'mongodb://localhostttt/jobfinder')
.then(function(){
		console.log('connected to mongodb successfully!');
		jobModel.seedJobs();
	}
);

var port = process.env.PORT || 3000;
app.listen(port);

