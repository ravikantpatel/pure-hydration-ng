/**
 * Menu Controller
 */

pureHydrationAppControllers.controller('ResourcesController', [ '$scope',
		'AuthService', 'USER_ROLES', '$window', 'DocumentService',
		function($scope, AuthService, USER_ROLES, $window, DocumentService) {
			$scope.documentList = DocumentService.getDocumentDetails();
		} ]);