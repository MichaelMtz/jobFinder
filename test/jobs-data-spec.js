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

var jobs;

describe('get jobs', function(){

	before(function(done){
		jobsData.connectDB(process.env.MONGOLAB_URI || 'mongodb://localhostt/jobfinder')
			.then(resetJobs)
			.then(jobsData.seedJobs)
			.then(jobsData.findJobs)
			.then(function(jobsList){
				jobs = jobsList;
				done();
		});
	});

	it('should never be empty since jobs are seeded', function(){
		expect(jobs.length).to.be.at.least(1);	 		
	});

	it('should have a job with a title', function(){
		expect(jobs[0].title).to.not.be.empty;
	});

	it('should have a job with a description', function(){
		expect(jobs[0].description).to.not.be.empty;
	});
});