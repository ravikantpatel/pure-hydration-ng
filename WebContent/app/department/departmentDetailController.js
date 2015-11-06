/**
 * Department Detail Controller
 */

pureHydrationAppControllers
		.controller(
				'DepartmentDetailController',
				[
						'$scope',
						'AuthService',
						'$window',
						'UNITS',
						'DepartmentService',
						'CountryService',
						'StateService',
						'$routeParams',
						'UserService',
						function($scope, AuthService, $window, UNITS,
								DepartmentService, CountryService,
								StateService, $routeParams, UserService) {

							$scope.departmentDetail = DepartmentService
									.getDepartmentDetailById($routeParams.id);
							console.log('$routeParams.id:' + $routeParams.id)
							// alert($scope.companyDetail.companyName);

							if ($scope.departmentDetail == null) {
								// alert('Null found')
								var departmentDetails = {
									departmentId : 0,
									departmentName : '',
									description : '',
									edit : ''

								};
								$scope.departmentDetail = departmentDetails;
								$scope.pageHeader = 'New Department';
								$scope.pagePath = 'Manage Resources / Departments / New Department';
								$scope.saveActionCaption = 'Add';
							} else {
								$scope.pageHeader = $scope.departmentDetail.title
										+ ' - Edit Department';
								$scope.pagePath = 'Manage Resources / Departments / Edit Department';
								$scope.saveActionCaption = 'Update';
							}
							// alert($scope.companyDetail);
							$scope.config = {
								itemsPerPage : 5,
								fillLastPage : true
							}
						} ]);
