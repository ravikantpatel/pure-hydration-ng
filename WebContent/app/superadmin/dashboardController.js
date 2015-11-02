/**
 * Super Admin Dashboard Controller
 */

pureHydrationAppControllers.controller('superadminDashboardController', [
		'$scope', '$window', 'AuthService', 'UNITS', 'CompanyService',
		function($scope, $window, AuthService, UNITS, CompanyService) {
			AuthService.checkAuthentication();
			$scope.summaryWidget = {};
			$scope.summaryWidget.totalWaterLogged = 100;
			$scope.summaryWidget.liquidUnit = UNITS.liquidUnit;
			$scope.summaryWidget.totalGoal = 200;
			$scope.summaryWidget.totalActiveUsers = 14;
			$scope.summaryWidget.completed12DBluePrint = 11;

			$scope.companyDetails = CompanyService.getCompanyDetails();

		} ]);