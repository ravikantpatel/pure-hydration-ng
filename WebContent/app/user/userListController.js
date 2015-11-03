/**
 * User List Controller
 */

pureHydrationAppControllers.controller('UserListController', [ '$scope',
		'AuthService', '$window', 'UNITS', 'CompanyService',

		function($scope, AuthService, $window, UNITS, CompanyService) {
			AuthService.checkAuthentication();
			$scope.pagePath = 'Company Users';
			$scope.companyId = $scope.loginBean.userCompanyId;
			$scope.companyName = CompanyService.getCompanyDetailById($scope.companyId).companyName;
		} ]);
