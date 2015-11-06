/**
 * Department List Directive
 */

pureHydrationAppDirectives.directive("departmentListTableDirective", function() {
	return function(scope, element, attrs) {
		scope.$watch("departmentDetails", function() {
//			alert('message');
			$table = $('#DepartmentListTable').bootstrapTable({
				data : scope.departmentDetails
			});
		});
	};
});