/**
 * Location List Directive
 */

pureHydrationAppDirectives.directive("locationListTableDirective", function() {
	return function(scope, element, attrs) {
		scope.$watch("locationDetails", function() {
//			alert('message');
			$table = $('#LocationListTable').bootstrapTable({
				data : scope.locationDetails
			});
		});
	};
});