/**
 * Group List Directive
 */

pureHydrationAppDirectives.directive("groupListTableDirective", function() {
	return function(scope, element, attrs) {
		scope.$watch("groupDetails", function() {
//			alert('message');
			$table = $('#GroupListTable').bootstrapTable({
				data : scope.groupDetails
			});
		});
	};
});