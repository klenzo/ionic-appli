angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('GallerysCtrl', function($scope) {
	$scope.gallerys = [
		{ 
			id: 1,
			title: 'Klenzo', 
			img: 'img/slide.jpg', 
			short: 'Petite Description', 
			descript: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{ 
			id: 2,
			title: 'Klenzo2', 
			img: 'img/slide.jpg', 
			short: 'Petite Description', 
			descript: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{ 
			id: 3,
			title: 'Klenzo2', 
			img: 'img/slide.jpg', 
			short: 'Petite Description', 
			descript: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
	];
})

.controller('GalleryCtrl', function($scope, $stateParams) {



});
