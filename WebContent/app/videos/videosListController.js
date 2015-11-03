/**
 * Videos List Controller
 */

pureHydrationAppControllers.controller('VideosListController', [ '$scope',
		'AuthService', '$window', 'UNITS', 'VideosService',

		function($scope, AuthService, $window, UNITS, VideosService) {
			AuthService.checkAuthentication();

			$scope.videosDetails = VideosService.getVideosDetails();

			$scope.exportToXLS = function () {
		        alasql('SELECT * INTO XLSX("videosList.xlsx",{headers:true}) FROM ?',[$scope.videosDetails]);
		    };
			
			$scope.config = {
				itemsPerPage : 5,
				fillLastPage : true
			}
		} ]);
