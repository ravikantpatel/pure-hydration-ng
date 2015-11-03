/**
 * Videos Detail Controller
 */

pureHydrationAppControllers.controller('VideosDetailController', [
		'$scope',
		'AuthService',
		'$window',
		'UNITS',
		'VideosService',
		'CountryService',
		'StateService',
		'$routeParams',
		'UserService',
		function($scope, AuthService, $window, UNITS, VideosService,
				CountryService, StateService, $routeParams, UserService) {
			if (AuthService.getStatus() == false) {
				$window.location.href = '#/login';
			}

			$scope.videosDetail = VideosService
					.getVideosDetailById($routeParams.id);
			console.log('$routeParams.id:' + $routeParams.id)
			// alert($scope.companyDetail.companyName);

			if ($scope.videosDetail == null) {
				// alert('Null found')
				var videosDetails = {
					videoId : 0,
					title : '',
					description : '',
					document : '',
					link : '',
					edit : ''

				};
				$scope.videosDetail = videosDetails;
				$scope.pageHeader = 'New Video';
				$scope.pagePath = 'Manage Resources / Videos / New Video';
				$scope.saveActionCaption = 'Add';
			} else {
				$scope.pageHeader = $scope.videosDetail.title
						+ ' - Edit Video';
				$scope.pagePath = 'Manage Resources / Videos / Edit Video';
				$scope.saveActionCaption = 'Update';
			}
			// alert($scope.companyDetail);
			$scope.config = {
				itemsPerPage : 5,
				fillLastPage : true
			}
		} ]);
