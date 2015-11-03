/**
 * Dashboard Route Controller
 */

pureHydrationAppControllers
		.controller('DashboardRouteController',
				[
						'$scope',
						'AuthService',
						'USER_ROLES',
						'$window',
						'$routeParams',
						function($scope, AuthService, USER_ROLES, $window,
								$routeParams) {
							$scope.templateUrl = 'app/' + $routeParams.dashboardType
									+ '/dashboard.html';
						} ]);