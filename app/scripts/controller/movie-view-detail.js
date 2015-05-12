
	MovieWebApp.controller('viewDetailMovieController',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
		var page = 1;
		$scope.actorList = [];
		  
		$scope.viewDetailMovie = function (identification) {
			$scope.viewDetailMovie=1;
			var url=  buildUrl("movie/"+identification,'') 
			  
			$http({method: 'GET', url: url}).
			success(function (data, status, headers, config) {
				if (status == 200) {         
					$scope.movie_detail=data;                     
				} 
				else {
					console.error('Error happened while getting details the movie.')
				}
			}).
			error(function (data, status, headers, config) {
				console.error('Error happened while getting details the movie.')
			});
			  
			var url_credits =  buildUrl("movie/"+identification+'/credits','') 
			$http({method: 'GET', url: url_credits}).
			success(function (data, status, headers, config) {
				if (status == 200) {         
					$scope.actorList.push.apply($scope.actorList, data.cast)   
				} 
				else {
					console.error('Error happened while getting details the movie.')
				}

			}).
			error(function (data, status, headers, config) {
				console.error('Error happened while getting details the movie.')
			});
		  }
		  
		  $scope.viewDetailMovie($routeParams.id);
   
	}]);
	
