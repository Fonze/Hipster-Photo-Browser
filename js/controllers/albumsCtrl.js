app.controller('albumsCtrl', function($scope, $state, photoService, photoFactory) {
	$scope.albums = [];
	//array for pagination buttons and their classes
	$scope.pages = [];
	
	//controls which up to 12 albums are shown on screen
	$scope.min = 0;
	$scope.max = 12;
	$scope.currentPage = 0;
	
	//ifs and use of service to minimize http-calls
	if(photoService.areThereAlbums() == false) {
		var promise = photoFactory.getAlbums();
		promise.then(function(success){
			
			photoService.setAllAlbums(success);
			$scope.albums = photoService.getAllAlbums();
			
			fillPages();
			
		}, function(error){
			console.log(error);
		});
	} else {
		$scope.albums = photoService.getAllAlbums();
		fillPages();
	}
	
	if(photoService.areTherePhotos() == false) {
		var promise = photoFactory.getPhotos();
		promise.then(function(success){
			photoService.setAllPhotos(success);
		}, function(error){
			console.log(error);
		});
	}
	
	if(photoService.areThereUsers() == false) {
		var promise = photoFactory.getUsers();
		promise.then(function(success){
			photoService.setUsers(success);
		}, function(error){
			console.log(error);
		});
	}
	
	function fillPages() {
		for(i = 0; i < Math.ceil($scope.albums.length / 12); i++) {
			$scope.pages.push({name: i + 1, buttonClass: ""});
		}
		$scope.pages[0].buttonClass = "active";
	}
	
	$scope.getPhoto = function(albumId, index) {
		photo = photoService.getPhoto(albumId, index);
		if(photo != undefined) {
			return photo.thumbnailUrl;
		} else {
			return undefined;
		}
	}
	
	$scope.thisPage = function(index) {
		$scope.currentPage = index;
		changePage();
	}
	
	$scope.prevPage = function() {
		$scope.currentPage--;
		changePage();
	}
	
	$scope.nextPage = function() {
		$scope.currentPage++;
		changePage();
	}
	
	var changePage = function() {
		$scope.min = $scope.currentPage * 12;
		$scope.max = ($scope.currentPage + 1) * 12;
		for(i = 0; i < $scope.pages.length; i++) {
			$scope.pages[i].buttonClass = "";
		}
		$scope.pages[$scope.currentPage].buttonClass = "active";
	}
	
	$scope.toAlbum = function(album) {
		photoService.setAlbum(album);
		$state.go('photos');
	}
	
});