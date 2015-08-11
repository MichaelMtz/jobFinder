var mongoose = require('mongoose');
var Promise = require('bluebird');

var jobSchema = mongoose.Schema({
	title: {type:String},
	description: {type: String}
});

var jobs = [
	{title: 'Cook', description: 'You will be making bagels'},
	{title: 'Waiter', description: 'You will be putting food on people table'},
	{title: 'programmer', description: 'You will be writing code all the time'}	
];

var job = mongoose.model('Job', jobSchema);

function findJobs(query){
	return Promise.cast(mongoose.model('Job').find(query).exec());
}

var createJob = Promise.promisify(job.create, job);

exports.seedJobs = function(){
	return findJobs({}).then(function(collection){
		if(collection.length === 0){
			return Promise.map(jobs, function(job){
						return createJob(job);
					})
		}
	});
};