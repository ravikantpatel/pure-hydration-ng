/**
 * Company List Directive
 */

pureHydrationAppDirectives.directive("documentListTableDirective", function() {
	return function(scope, element, attrs) {
		scope.$watch("documentDetails", function() {
//			alert('message');
			$table = $('#documentListTable').bootstrapTable({
				data : scope.documentDetails
			});
		});
	};
});