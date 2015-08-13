describe('posting jobs', function(){

	var postRequestJob;
	var newJob = {title: 'test title', description: 'test description'};

	beforeEach(module('app'));

	it('should call /api/jobs with job data', inject(function($httpBackend, jobs){

		//Arranging the mock to intercept call from angular api ($resource or $http services)
		$httpBackend.whenPOST('/api/jobs', function(data){
			postRequestJob = JSON.parse(data);
			expect(postRequestJob).to.not.be.empty;
			return true; //It returns true to the mocks so it knows it has completed.
		}).respond(200);

		//Act: 
		jobs.save(newJob);
		$httpBackend.flush(); //It makes sure the asynchronous part (whenPOST) finishes before the test finishes. 
							  //No need to use done function.
	}));	
});