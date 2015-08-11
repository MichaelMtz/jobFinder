var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobModel = require('../models/jobs.js');
var Promise = require('bluebird');
var jobsData = require('../jobs-data.js');

function resetJobs(){
	return new Promise(function(resolve, reject){
		mongoose.connection.collections['jobs'].drop(resolve, reject);
	});
}

var connectDB = Promise.promisify(mongoose.connect, mongoose);

describe('get jobs', function(){
	it('should never be empty since jobs are seeded', function(done){
		
		connectDB(process.env.MONGOLAB_URI || 'mongodb://localhost/jobfinder')
			.then(resetJobs)
			.then(jobModel.seedJobs)
			.then(jobsData.findJobs)
			.then(function(jobsList){
				expect(jobsList.length).to.be.at.least(1);
				done();
			}); 		
	});
});