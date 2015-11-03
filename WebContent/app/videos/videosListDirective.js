/**
 * Videos List Directive
 */

pureHydrationAppDirectives.directive("videosListTableDirective", function() {
	return function(scope, element, attrs) {
		scope.$watch("videosDetails", function() {
//			alert('message');
			$table = $('#videoListTable').bootstrapTable({
				data : scope.videosDetails
			});
		});
	};
});