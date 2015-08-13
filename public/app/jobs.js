
app.factory('jobs', ['$resource', function resource($resource){

	return $resource('/api/jobs/');
}]);