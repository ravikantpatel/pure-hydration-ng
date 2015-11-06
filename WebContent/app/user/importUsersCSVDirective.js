/**
 * Import Users Directive
 */

pureHydrationAppDirectives.directive("importUsersDirective", function() {
	return function(scope, element, attrs) {
		scope.$watch("param.file", function() {
			alasql('select * into ? from xlsx("?", {headers:true})', [
					scope.userDetails, scope.param.file ]);
		});
	};
});