/**
 * 
 */

pureHydrationAppDirectives.directive("importUsersDirective", function() {
	return function(scope, element, attrs) {
		scope.$watch("param.file", function() {
			alert('message:' + scope.param.file);
			alasql('select * into ? from xlsx("?", {headers:true})', [
					scope.userDetails, scope.param.file ]);
		});
	};
});