app.directive('polaroidPhoto', function() {
	return {
		restrict: 'E',
		scope: {
			photo: '='
		},
		templateUrl: 'js/directives/polaroidPhoto.html'
	};
});