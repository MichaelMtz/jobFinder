angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope){
	//$scope.test = 'Angular working!!';

	$scope.jobs = [{title: 'Sales person', description: 'you will fight dragons'},
					{title: 'Accountant', description: 'you will use the keyboard'}];
});