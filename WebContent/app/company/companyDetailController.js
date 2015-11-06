/**
 * Company Detail Controller
 */

pureHydrationAppControllers
		.controller(
				'CompanyDetailController',
				[
						'$rootScope',
						'$scope',
						'AuthService',
						'$window',
						'UNITS',
						'CompanyService',
						'CountryService',
						'StateService',
						'$routeParams',
						'UserService',
						function($rootScope, $scope, AuthService, $window,
								UNITS, CompanyService, CountryService,
								StateService, $routeParams, UserService) {

							console.log('$routeParams.id:' + $routeParams.id)
							$scope.companyDetail = CompanyService
									.getCompanyDetailById($routeParams.id == undefined ? $rootScope.loginBean.userCompanyId
											: $routeParams.id);
							// alert($scope.companyDetail.companyName);
							$scope.countryList = CountryService.getCountries();
							$scope.stateList = StateService.getStates();
							$scope.showCompanyUsers = false;

							if ($scope.companyDetail == null) {
								// alert('Null found')
								var companyDetails = {
									companyId : 0,
									companyName : '',
									users : 0,
									completedBluePrint : 0,
									waterConsumption : 0,
									goalMet : 0,
									companySince : 0,
									address1 : '',
									address2 : '',
									city : '',
									state : '',
									postalCode : '',
									contactNo : '',
									website : '',
									emailId : '',
									status : '',
									companyLogoUrl : '',
									link : ''
								};
								$scope.companyDetail = companyDetails;
								$scope.pageHeader = 'New Company Profile';
								$scope.pagePath = 'Company List / Create Company';
								$scope.saveActionCaption = 'Create';
								$scope.showCompanyUsers = false;
							} else {
								$scope.pageHeader = $scope.companyDetail.companyName
										+ ' - Edit Company Profile ';
								if ($routeParams.id == undefined) {
									$scope.pagePath = 'Company Profile';
									$scope.showCompanyUsers = false;
								} else {
									$scope.pagePath = 'Company List / Edit Company';
									$scope.showCompanyUsers = true;
								}

								$scope.saveActionCaption = 'Update';
							}
							$scope.companyId = $scope.companyDetail.companyId;
							$scope.companyName = $scope.companyDetail.companyName;
							// alert($scope.companyDetail);
							$scope.config = {
								itemsPerPage : 5,
								fillLastPage : true
							};

							$scope.addUpdate = function() {
								CompanyService
										.addUpdateCompany($scope.companyDetail);
//								$window.location.href = '#/Detail/company/'
//										+ $scope.companyDetail.companyId
							};
						} ]);
