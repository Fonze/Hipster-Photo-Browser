app.factory('photoFactory', function($q, $http) {
	var photoArr = [];
	
	var url = "http://jsonplaceholder.typicode.com/";
	
	photoArr.getAlbums = function() {
		var deferred = $q.defer();
		$http.get(url + "albums").then(function(resp) {
			deferred.resolve(resp.data);
		}, function(err) {
			deferred.reject(err);
		});
		
		return deferred.promise;
	}
	
	photoArr.getPhotos = function() {
		var deferred = $q.defer();
		$http.get(url + "photos").then(function(resp) {
			deferred.resolve(resp.data);
		}, function(err) {
			deferred.reject(err);
		});
		
		return deferred.promise;
	}
	
	photoArr.getUsers = function() {
		var deferred = $q.defer();
		$http.get(url + "users").then(function(resp) {
			deferred.resolve(resp.data);
		}, function(err) {
			deferred.reject(err);
		});
		
		return deferred.promise;
	}
	
	return photoArr;
});