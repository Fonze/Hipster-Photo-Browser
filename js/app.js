var app = angular.module('photoApp', [ 'ui.router' ]);
	
app.config(function ($stateProvider, $urlRouterProvider) {
	
    $stateProvider
	
	.state('albums', {
		
		url: '/albums',
		views: {
			'photoContent': {
				templateUrl: 'html/albums.html',
				controller: 'albumsCtrl'
			}
		}
	})
	
	.state('photos', {
		
		url: '/photos',
		views: {
			'photoContent': {
				templateUrl: 'html/photos.html',
				controller: 'photosCtrl'
			}
		}
	})
	
	$urlRouterProvider.otherwise('/albums');
});
