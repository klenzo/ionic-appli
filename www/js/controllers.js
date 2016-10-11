angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('GallerysCtrl', function($scope) {
	$scope.gallerys = [
		{ 
			title: 'Klenzo', 
			id: 1, 
			img: 'img/slide.jpg', 
			short: 'Petite Description', 
			descript: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
		{ 
			title: 'Klenzo2', 
			id: 1, 
			img: 'img/slide.jpg', 
			short: 'Petite Description', 
			descript: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
		{ 
			title: 'Klenzo2', 
			id: 1, 
			img: 'img/slide.jpg', 
			short: 'Petite Description', 
			descript: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
	];
})

.controller('GalleryCtrl', function($scope, $stateParams) {
});
