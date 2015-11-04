/**
 * Detail Route Controller
 */

pureHydrationAppControllers.controller('DetailRouteController', [
		'$scope',
		'AuthService',
		'$window',
		'$routeParams',
		function($scope, AuthService, $window, $routeParams) {
			$scope.templateUrl = 'app/' + $routeParams.entityType
					+ '/detail.html';
		} ]);