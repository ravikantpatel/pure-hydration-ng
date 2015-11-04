/**
 * Dashboard Route Controller
 */

pureHydrationAppControllers.controller('DashboardRouteController', [
		'$scope',
		'AuthService',
		'$window',
		'$routeParams',
		function($scope, AuthService, $window, $routeParams) {
			$scope.templateUrl = 'app/' + $routeParams.dashboardType
					+ '/dashboard.html';
		} ]);