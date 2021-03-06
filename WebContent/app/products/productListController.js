/**
 * Product List Controller
 */

pureHydrationAppControllers
		.controller(
				'ProductListController',
				[
						'$scope',
						'AuthService',
						'$window',
						'UNITS',
						'ProductService',

						function($scope, AuthService, $window, UNITS,
								ProductService) {
							$scope.pagePath = 'Manage Resources / Products';
							$scope.productDetails = ProductService
									.getProductDetails();

							$scope.exportToXLS = function() {
								alasql(
										'SELECT * INTO XLSX("productList.xlsx",{headers:true}) FROM ?',
										[ $scope.productDetails ]);
							};

							$scope.config = {
								itemsPerPage : 5,
								fillLastPage : true
							}
						} ]);
