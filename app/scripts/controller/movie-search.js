
	//controllers
	MovieWebApp.controller('searchMovieController',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
		var page = 1;
		var msgMovieFound = "Movies results";	
		var msgMovieNotFound = "Movies were not found";
		var msgMovieError = "Movies were not found";
		var querySearch='';
		$scope.movieList = [];
		$scope.movieResult = msgMovieFound;
		
		$scope.getMovieList = function (val,currentPage) {
			page=currentPage;
		
			var url= val=='' ? buildUrl("movie/popular",'&page='+page)  : buildUrl("search/movie",'&query='+val+'&page='+page);

			$http({method: 'GET', url: url}).
			success(function (data, status, headers, config) {
				if(currentPage==1){
					$scope.movieList = [];
				}
				
				if (status == 200) {
					$scope.movieList.push.apply($scope.movieList, data.results) 
					$scope.movieResult = msgMovieFound;  
					
					if(data.total_results == 0){
						$scope.movieResult = msgMovieNotFound;  
					}
				} 
				else {
					$scope.movieResult = msgMovieError;
				}

			}).error(function (data, status, headers, config) {
				$scope.movieResult = msgMovieError;
			});
			
			querySearch=val;
		}
	  
		$scope.getMovieListByTitle = function () {
			if($routeParams.searchMovieName){
				$scope.getMovieList($routeParams.searchMovieName,1);
			}
			else{
				$scope.getMovieList('',1);
			}
		}
	  
		$scope.getMoreMovies = function () {
			$scope.getMovieList(querySearch,++page);
		}
		
		$scope.getMovieListByTitle();
	}]);
	
	
