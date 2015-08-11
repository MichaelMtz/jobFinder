var mongoose = require('mongoose');
var Promise = require('bluebird');

function findJobs(query){
	return Promise.cast(mongoose.model('Job').find(query).exec());
}