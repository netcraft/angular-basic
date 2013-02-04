function TodoController($scope, youtube){
	$scope.search = function(term){
		youtube.getVideos(term, function(ytData){
			$scope.videos = ytData;
		});
	}
}

TodoController.$inject = ["$scope", "youtube"];