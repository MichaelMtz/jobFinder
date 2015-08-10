var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
	title: {type:String},
	description: {type: String}
});

var job = mongoose.model('Job', jobSchema);

exports.seedJobs = function(){
	job.find({}).exec(function(error, collection){
		if(collection.length === 0){
			job.create({title: 'Cook', description: 'You will be making bagels'});
			job.create({title: 'Waiter', description: 'You will be putting food on people table'});
			job.create({title: 'programmer', description: 'You will be writing code all the time'});
		}
	});
};