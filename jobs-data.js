var mongoose = require('mongoose');
var jobModel = require('./models/jobs.js');
var Promise = require('bluebird');

var job = mongoose.model('Job');

var findJobs = function(query){
	return Promise.cast(job.find(query).exec());
}

var createJob = Promise.promisify(job.create, job);

exports.findJobs = findJobs;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

exports.saveJob = createJob;

exports.seedJobs = function(){
	//console.log(this);
	return findJobs({}).then(function(collection){
		if(collection.length === 0){
			return Promise.map(jobs, function(job){
						return createJob(job);
					})
		}
	});
};

var jobs = [
	{title: 'Cook', description: 'You will be making bagels'},
	{title: 'Waiter', description: 'You will be putting food on people table'},
	{title: 'programmer', description: 'You will be writing code all the time'}	
];