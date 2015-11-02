/**
 * Dashboard Route Controller
 */

pureHydrationAppControllers
		.controller('ListRouteController',
				[
						'$scope',
						'AuthService',
						'USER_ROLES',
						'$window',
						'$routeParams',
						function($scope, AuthService, USER_ROLES, $window,
								$routeParams) {
							console.log('coming to list Route');
							$scope.templateUrl = 'app/' + $routeParams.entityType
									+ '/list.html';
						} ]);