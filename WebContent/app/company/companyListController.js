/**
 * Company List Controller
 */

pureHydrationAppControllers.controller('CompanyListController', [ '$scope',
		'AuthService', '$window', 'UNITS', 'CompanyService',

		function($scope, AuthService, $window, UNITS, CompanyService) {
			AuthService.checkAuthentication();

			$scope.companyDetails = CompanyService.getCompanyDetails();

			$scope.exportToXLS = function () {
		        alasql('SELECT * INTO XLSX("companyList.xlsx",{headers:true}) FROM ?',[$scope.companyDetails]);
		    };
			
			$scope.config = {
				itemsPerPage : 5,
				fillLastPage : true
			}
		} ]);
