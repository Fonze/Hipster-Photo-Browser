app.controller('photosCtrl', function($scope, $state, photoService) {
	
	$scope.pages = [];
	$scope.album = photoService.getAlbum();
	
	//not letting anyone here just by url with no album-info
	if($scope.album == null) {
		$state.go('albums');
	}
	
	$scope.user = photoService.getUser($scope.album.userId);
	
	for(i = 0; i < Math.ceil($scope.album.photos.length / 12); i++) {
		$scope.pages.push({name: i + 1, buttonClass: ""});
	}
	$scope.pages[0].buttonClass = "active";
	
	$scope.watchPhoto = false;
	$scope.min = 0;
	$scope.max = 12;
	$scope.currentPage = 0;
	
	$scope.watching;
	$scope.browseArea = "";
	
	$scope.watchThis = function(photo) {
		$scope.watchPhoto = true;
		$scope.watching = photo;
		$scope.browseArea = "blur";
	}
	
	$scope.closeWatch = function() {
		$scope.watchPhoto = false;
		$scope.browseArea = "";
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
		console.log($scope.pages[0].buttonClass);
		$scope.min = $scope.currentPage * 12;
		$scope.max = ($scope.currentPage + 1) * 12;
		for(i = 0; i < $scope.pages.length; i++) {
			$scope.pages[i].buttonClass = "";
		}
		$scope.pages[$scope.currentPage].buttonClass = "active";
	}
	
	$scope.back = function () {
		$state.go('albums');
	}

});