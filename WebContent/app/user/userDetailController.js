/**
 * User Detail Controller
 */

pureHydrationAppControllers
		.controller(
				'UserDetailController',
				[
						'$rootScope',
						'$scope',
						'AuthService',
						'$window',
						'UNITS',
						'CountryService',
						'StateService',
						'$routeParams',
						'UserService',
						'CompanyService',
						'DepartmentService',
						'LocationService',
						'GroupService',
						function($rootScope, $scope, AuthService, $window,
								UNITS, CountryService, StateService,
								$routeParams, UserService, CompanyService,
								DepartmentService, LocationService,
								GroupService) {

							$scope.userDetail = UserService
									.getUserDetailById($routeParams.id == undefined ? $rootScope.loginBean.userId
											: $routeParams.id);
							console.log('$routeParams.id:' + $routeParams.id)
							// alert($scope.companyDetail.companyName);

							$scope.departmentList = DepartmentService
									.getDepartmentDetails();
							$scope.locationList = LocationService
									.getLocationDetails();
							$scope.groupList = GroupService.getGroupDetails();

							if ($scope.userDetail == null) {
								// alert('Null found')
								var userDetails = {
									userId : 0,
									title : '',
									firstName : '',
									lastName : '',
									department : '',
									emailId : '',
									type : '',
									status : '',
									companyId : 0,

								};
								$scope.companyDetail = CompanyService
										.getCompanyDetailById($rootScope.loginBean.userCompanyId);
								$scope.userDetail = userDetails;
								$scope.pageHeader = $scope.companyDetail.companyName
										+ ' - User Profile';
								if ($rootScope.loginBean.selectedMenuItem == 'superAdminCompanyList') {
									$scope.pagePath = 'Company List / '
											+ $scope.companyDetail.companyName
											+ ' / Create User';

								} else if ($rootScope.loginBean.selectedMenuItem == 'companyAdminUsers') {
									$scope.pagePath = 'Company Users / '
											+ $scope.companyDetail.companyName
											+ ' / Create User';
								} else if ($rootScope.loginBean.selectedMenuItem == 'companyUserProfile') {
									$scope.pagePath = 'User Profile';
								} else {
									$scope.pagePath = 'User Profile';
								}
								$scope.saveActionCaption = 'Add';
							} else {
								$scope.companyDetail = CompanyService
										.getCompanyDetailById($scope.userDetail.companyId);
								$scope.pageHeader = $scope.companyDetail.companyName
										+ ' - User Profile';
								if ($rootScope.loginBean.selectedMenuItem == 'superAdminCompanyList') {
									$scope.pagePath = 'Company List / '
											+ $scope.companyDetail.companyName
											+ ' / Edit User';

								} else if ($rootScope.loginBean.selectedMenuItem == 'companyAdminUsers') {

									$scope.pagePath = 'Company Users / '
											+ $scope.companyDetail.companyName
											+ ' / Edit User';
								} else if ($rootScope.loginBean.selectedMenuItem == 'companyUserProfile') {

									$scope.pagePath = 'User Profile';
								} else {
									$scope.pagePath = 'User Profile';
								}
								$scope.saveActionCaption = 'Update';
							}
							// alert($scope.companyDetail);
							$scope.config = {
								itemsPerPage : 5,
								fillLastPage : true
							}
						} ]);
