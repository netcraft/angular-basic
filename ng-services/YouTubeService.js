angular.module('YouTubeModule', [])
  .factory('youtube', function($http) {
    return {
		getVideos: function(searchTerm, callback){
			$http.jsonp("http://gdata.youtube.com/feeds/api/videos?q="+ encodeURIComponent(searchTerm) + "&v=2&alt=json&callback=JSON_CALLBACK")
			.success(function(data){
				callback(data.feed.entry);
			})
			.error(function(error){
				console.error(error);
				callback();
			});
		}
    };
  });