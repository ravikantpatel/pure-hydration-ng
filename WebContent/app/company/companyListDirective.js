/**
 * Company List Directive
 */

pureHydrationAppDirectives.directive("companyListTableDirective", function() {
	return function(scope, element, attrs) {
		scope.$watch("companyDetails", function() {
//			alert('message');
			$table = $('#companyListTable').bootstrapTable({
				data : scope.companyDetails
			});
		});
	};
});