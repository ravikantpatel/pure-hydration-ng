/**
 * Department List Controller
 */

pureHydrationAppControllers.controller('DepartmentListController', [ '$scope',
		'AuthService', '$window', 'UNITS', 'DepartmentService',

		function($scope, AuthService, $window, UNITS, DepartmentService) {

			$scope.departmentDetails = DepartmentService.getDepartmentDetails();
			$scope.pagePath = 'Departments';
			$scope.exportToXLS = function () {
		        alasql('SELECT * INTO XLSX("departmentList.xlsx",{headers:true}) FROM ?',[$scope.departmentDetails]);
		    };
			
			$scope.config = {
				itemsPerPage : 5,
				fillLastPage : true
			}
		} ]);
