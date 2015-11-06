/**
 * Location List Controller
 */

pureHydrationAppControllers.controller('LocationListController', [ '$scope',
		'AuthService', '$window', 'UNITS', 'LocationService',

		function($scope, AuthService, $window, UNITS, LocationService) {

			$scope.locationDetails = LocationService.getLocationDetails();
			$scope.pagePath = 'Locations';
			$scope.exportToXLS = function () {
		        alasql('SELECT * INTO XLSX("locationList.xlsx",{headers:true}) FROM ?',[$scope.locationDetails]);
		    };
			
			$scope.config = {
				itemsPerPage : 5,
				fillLastPage : true
			}
		} ]);
