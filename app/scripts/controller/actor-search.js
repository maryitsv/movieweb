
	MovieWebApp.controller('searchActorController',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
		var page = 1;
		var querySearch='';
		var msgActorFound = "People results";	
		var msgActorNotFound = "People were not found";
		var msgActorError = "Error happened while getting the people list.";
		$scope.actorResult = msgActorFound;
		$scope.actorList = [];
					
		$scope.getActorList = function (val,currentPage) {
			page=currentPage;
			url = buildUrl("search/person",'&page=' + page +'&query='+val)
			  
			$http({method: 'GET', url: url}).
				success(function (data, status, headers, config) {
					if(currentPage==1){
						$scope.actorList = [];
					}
				
					if (status == 200) {
						$scope.actorList.push.apply($scope.actorList, data.results);
						$scope.actorResult = msgActorFound;  
				
						if(data.total_results==0){
							$scope.actorResult = msgActorNotFound;  
						}
					} else {
						$scope.actorResult = msgActorError;
					}
			}).
			error(function (data, status, headers, config) {
					$scope.actorResult = msgActorError;
			});
			querySearch=val;
		}
				  
		$scope.getActorListByName = function () {
			if($routeParams.searchActorName){
				$scope.getActorList($routeParams.searchActorName,1);
			}
			else{
				$scope.getActorList('',1);
			}
		}
	  
		$scope.getMorePeople = function () {
			if(querySearch!=''){
				$scope.getActorList(querySearch,++page);
			}
		}
	  
		$scope.getActorListByName();	
	}]);
	
