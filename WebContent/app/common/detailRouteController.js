/**
 * Detail Route Controller
 */

pureHydrationAppControllers
		.controller('DetailRouteController',
				[
						'$scope',
						'AuthService',
						'USER_ROLES',
						'$window',
						'$routeParams',
						function($scope, AuthService, USER_ROLES, $window,
								$routeParams) {
							$scope.templateUrl = 'app/' + $routeParams.entityType
									+ '/detail.html';
						} ]);