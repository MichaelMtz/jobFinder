angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource){
	//$scope.test = 'Angular working!!';

	// $scope.jobs = [{title: 'Sales person', description: 'you will fight dragons'},
	// 				{title: 'Accountant', description: 'you will use the keyboard'}];

	$scope.jobs = $resource('/api/jobs').query();
});