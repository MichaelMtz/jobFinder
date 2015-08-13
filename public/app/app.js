app = angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource, jobs){
	//$scope.test = 'Angular working!!';

	// $scope.jobs = [{title: 'Sales person', description: 'you will fight dragons'},
	// 				{title: 'Accountant', description: 'you will use the keyboard'}];

	$scope.jobs = $resource('/api/jobs').query();

	$scope.submit = function(){
		var job = {title: $scope.title, description: $scope.description}
		jobs.save(job);
		$scope.jobs.push(job);
	};

});