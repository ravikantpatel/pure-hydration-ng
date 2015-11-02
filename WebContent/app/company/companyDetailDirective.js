/**
 * 
 */

pureHydrationAppDirectives.directive("userListTableDirective", function() {
	return function(scope, element, attrs) {
		scope.$watch("userDetails", function() {
			// alert('message');
			$table = $('#userListTable').bootstrapTable({
				data : scope.userDetails
			});
		});
	};
});