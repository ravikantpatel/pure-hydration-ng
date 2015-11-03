/**
 * Company List Controller
 */

pureHydrationAppControllers.controller('ProductDetailController', [
		'$scope',
		'AuthService',
		'$window',
		'UNITS',
		'ProductService',
		'CountryService',
		'StateService',
		'$routeParams',
		'UserService',
		function($scope, AuthService, $window, UNITS, ProductService,
				CountryService, StateService, $routeParams, UserService) {
			if (AuthService.getStatus() == false) {
				$window.location.href = '#/login';
			}
			$scope.productDetails = ProductService
					.getProductDetailById($routeParams.id);
			if ($scope.productDetails == null) {
				var productDetails = {

					productId : 0,
					productName : '',
					description : '',
					image : '',
					imageURL : ''

				};

				$scope.productDetails = productDetails;
				$scope.pageHeader = 'New Product';
				$scope.pagePath = 'Manage Resources / Products / Add Product';
				$scope.saveActionCaption = 'Add';
			} else {
				$scope.pageHeader = $scope.productDetails.productName
						+ ' - Edit Product'
				$scope.pagePath = 'Manage Resources / Products / Edit Product';
				$scope.saveActionCaption = 'Update';
			}


			$scope.config = {
				itemsPerPage : 5,
				fillLastPage : true
			}
		} ]);
