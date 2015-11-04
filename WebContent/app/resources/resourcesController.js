/**
 * Resources Controller
 */

pureHydrationAppControllers.controller('ResourcesController', [
		'$scope',
		'AuthService',
		'$window',
		'DocumentService',
		'ProductService',
		function($scope, AuthService, $window, DocumentService,
				ProductService) {
			$scope.documentList = DocumentService.getDocumentDetails();
			$scope.productList = ProductService.getProductDetails();
			$scope.pagePath = 'Resources';
		} ]);
