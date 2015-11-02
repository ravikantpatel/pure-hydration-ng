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
							console.log('coming to dashboard Route');
							$scope.templateUrl = 'app/' + $routeParams.dashboardType
									+ '/dashboard.html';
						} ]);