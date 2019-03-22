app.controller('boatrecController', function($location, $http, $rootScope, $scope, $routeParams, $interval, $timeout)
{
	if($location.path() == '/')
	{
		var data = [];
        var row = {};
        $http.get('/data').success(function(response, err) {
            row.data = response['data'];
            data.push(row);
            $scope.boatrecData = data; 
            console.log(data);
        });
	}
    
});
