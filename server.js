var express = require('express');
//var mongoose = require('mongoose');
var jobsData = require('./jobs-data.js');

var app = express();

var jobService = require('./jobs-service')(jobsData, app);

app.set('views', __dirname);
app.set('view engine', 'vash');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
	res.render('index');
});

//mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/jobfinder');

jobsData.connectDB(process.env.MONGOLAB_URI || 'mongodb://localhost/jobfinder')
.then(function(){
		console.log('connected to mongodb successfully!');
		jobsData.seedJobs();
	}
);

var port = process.env.PORT || 3000;
app.listen(port);

