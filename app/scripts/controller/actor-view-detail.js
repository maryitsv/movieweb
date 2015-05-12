
	MovieWebApp.controller('viewDetailActorController',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
		var page = 1;
		$scope.movieList = [];
		  
		$scope.viewDetailActor = function (identification) {
			$scope.viewDetailMovie=1;
			var url = buildUrl('person/' + identification,'') ;
			  
			$http({method: 'GET', url: url}).
			success(function (data, status, headers, config) {
				if (status == 200) {        
					$scope.actor=data;                     
				} else {
					console.error('Error happened while getting details the movie.')
				}
			}).
			error(function (data, status, headers, config) {
				console.error('Error happened while getting details the movie.')
			});
			  
			var url_credits = buildUrl('person/' + identification+'/movie_credits','')
			$http({method: 'GET', url: url_credits}).
			success(function (data, status, headers, config) {
				if (status == 200) {         	 
				  $scope.movieList.push.apply($scope.movieList, data.cast)   
				} 
				else {
					console.error('Error happened while getting details the movie.')
				}
			  }).
			error(function (data, status, headers, config) {
				console.error('Error happened while getting details the movie.')
			});
		  }
		  
		  $scope.viewDetailActor($routeParams.id);
	}]);	

