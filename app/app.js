	var MovieWebApp = angular.module('APP', []);
	
	MovieWebApp.config(function($routeProvider){
		$routeProvider.
		when('/',{templateUrl:'app/partials/movie-list.html'}).
		when('/movieDetail/:id',{templateUrl:'app/partials/movie-detail.html',controller:'viewDetailMovieController'}).
		when('/searchMovie/:searchMovieName',{templateUrl:'app/partials/movie-list.html',controller:'searchMovieController'}).
		when('/searchActor/:searchActorName',{templateUrl:'app/partials/actor-list.html',controller:'searchActorController'}).
		when('/actorDetail/:id',{templateUrl:'app/partials/actor-detail.html',controller:'viewDetailActorController'}).
		otherwise({redirectTo:'/'})
	});
	
	//general funtions
	function buildUrl(api,addParams){
		var urlBase = "https://api.themoviedb.org/3/";
		var apiKey = '196acd14c33b78a57f5eafb5e3b404fd';
		
		return urlBase+api+'?'+'&api_key=' + apiKey+ addParams;//+'&page='+page;
	}
	
