/**
 * Document List Controller
 */

pureHydrationAppControllers
		.controller(
				'DocumentListController',
				[
						'$scope',
						'AuthService',
						'$window',
						'UNITS',
						'DocumentService',
						function($scope, AuthService, $window, UNITS,
								DocumentService) {
							$scope.pagePath = 'Manage Resources / Documents';
							$scope.documentDetails = DocumentService
									.getDocumentDetails();

							$scope.exportToXLS = function() {
								alasql(
										'SELECT * INTO XLSX("documentList.xlsx",{headers:true}) FROM ?',
										[ $scope.documentDetails ]);
							};

							$scope.config = {
								itemsPerPage : 5,
								fillLastPage : true
							}
						} ]);
