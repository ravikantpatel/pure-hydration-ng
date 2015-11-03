/**
 * List Route Controller
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
							$scope.templateUrl = 'app/' + $routeParams.entityType
									+ '/list.html';
						} ]);