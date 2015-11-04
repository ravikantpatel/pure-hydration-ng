/**
 * List Route Controller
 */

pureHydrationAppControllers.controller('ListRouteController', [
		'$scope',
		'AuthService',
		'$window',
		'$routeParams',
		function($scope, AuthService, $window, $routeParams) {
			$scope.templateUrl = 'app/' + $routeParams.entityType
					+ '/list.html';
		} ]);