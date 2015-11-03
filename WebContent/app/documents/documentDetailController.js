/**
 * Document List Controller
 */

pureHydrationAppControllers
		.controller(
				'DocumentDetailController',
				[
						'$scope',
						'AuthService',
						'$window',
						'UNITS',
						'DocumentService',
						'CountryService',
						'StateService',
						'$routeParams',
						'UserService',
						function($scope, AuthService, $window, UNITS,
								DocumentService, CountryService, StateService,
								$routeParams, UserService) {
							if (AuthService.getStatus() == false) {
								$window.location.href = '#/login';
							}

							$scope.documentDetail = DocumentService
									.getDocumentDetailById($routeParams.id);
							console.log('$routeParams.id:' + $routeParams.id)
							// alert($scope.companyDetail.companyName);

							if ($scope.documentDetail == null) {
								// alert('Null found')
								var documentDetails = {
									documentId : 0,
									documentName : '',
									description : '',
									document : ''

								};
								$scope.documentDetail = documentDetails;
								$scope.pageHeader = 'New Document';
								$scope.pagePath = 'Manage Resources / Documents / Add Document';
								$scope.saveActionCaption = 'Add';
							} else {
								$scope.pageHeader = $scope.documentDetail.documentName
										+ ' - Edit Document';
								$scope.pagePath = 'Manage Resources / Documents / Edit Document';
								$scope.saveActionCaption = 'Update';
							}
							// alert($scope.companyDetail);
							$scope.config = {
								itemsPerPage : 5,
								fillLastPage : true
							}
						} ]);
