/**
 * Company List Controller
 */

pureHydrationAppControllers.controller('CompanyListController', [ '$scope',
		'AuthService', '$window', 'UNITS', 'CompanyService',
		function($scope, AuthService, $window, UNITS, CompanyService) {
			if (AuthService.getStatus() == false) {
				$window.location.href = '#/login';
			}
			$scope.companyDetails = CompanyService.getCompanyDetails();
			$scope.config = {
				itemsPerPage : 5,
				fillLastPage : true
			}
		} ]);
pureHydrationApp.directive("bootstrapTable", function() {
	return function(scope, element, attrs) {
		scope.$watch("companyDetails", function() {
//			alert('message');
			$table = $('#companyListTable').bootstrapTable({
				data : scope.companyDetails
			});
		});
	};
});