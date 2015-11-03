/**
 * Company List Controller
 */

pureHydrationAppControllers.controller('UserListTableController', [ '$scope',
		'AuthService', '$window', 'UNITS', 'UserService',

		function($scope, AuthService, $window, UNITS, UserService) {
			AuthService.checkAuthentication();

//			alert($scope.companyId)
			$scope.userDetails = UserService.getUserDetailByCompanyId($scope.companyId);

			$scope.exportToXLS = function () {
		        alasql('SELECT * INTO XLSX("companyList.xlsx",{headers:true}) FROM ?',[$scope.userDetails]);
		    };
			
			$scope.config = {
				itemsPerPage : 5,
				fillLastPage : true
			}
		} ]);
