/**
 * Super Admin Dashboard Controller
 */

pureHydrationAppControllers.controller('DashboardController', [ '$scope',
		'$window', 'AuthService', 'UNITS', 'CompanyService',
		function($scope, $window, AuthService, UNITS, CompanyService) {
			if (AuthService.getStatus() == false) {
				$window.location.href = '#/login';
			}
			$scope.totalWaterLogged = 100;
			$scope.liquidUnit = UNITS.liquidUnit;
			$scope.totalGoal = 200;
			$scope.totalActiveUsers = 14;

			$scope.companyDetails = CompanyService.getCompanyDetails();
		} ]);