/**
 * Product List Directive
 */

pureHydrationAppDirectives.directive("productListTableDirective", function() {
	return function(scope, element, attrs) {
		scope.$watch("productDetails", function() {
//			alert('message');
			$table = $('#productListTable').bootstrapTable({
				data : scope.productDetails
			});
		});
	};
});