/**
 * Menu Controller
 */

pureHydrationAppControllers.controller('UnitSettingController', [ '$scope',
		'AuthService', '$location', 'CompanyService',
		function($scope, AuthService, $location, CompanyService) {
			$scope.pagePath = 'Unit Settings';
		} ]);