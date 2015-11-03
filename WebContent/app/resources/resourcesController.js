/**
 * Menu Controller
 */

pureHydrationAppControllers.controller('ResourcesController', [ '$scope',
		'AuthService', 'USER_ROLES', '$window', 'DocumentService','ProductService',
		function($scope, AuthService, USER_ROLES, $window, DocumentService,ProductService) {
			$scope.documentList = DocumentService.getDocumentDetails();
			$scope.productList = ProductService.getProductDetails();
		} ]);