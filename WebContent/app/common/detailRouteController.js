/**
 * Dashboard Route Controller
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
							console.log('coming to Detail Route');
							$scope.templateUrl = 'app/' + $routeParams.entityType
									+ '/detail.html';
						} ]);