/**
 * Department Detail Controller
 */

pureHydrationAppControllers
		.controller(
				'LocationDetailController',
				[
						'$scope',
						'AuthService',
						'$window',
						'UNITS',
						'LocationService',
						'CountryService',
						'StateService',
						'$routeParams',
						'UserService',
						function($scope, AuthService, $window, UNITS,
								LocationService, CountryService,
								StateService, $routeParams, UserService) {

							$scope.locationDetail = LocationService
									.getLocationDetailById($routeParams.id);
							console.log('$routeParams.id:' + $routeParams.id)
							// alert($scope.companyDetail.companyName);

							if ($scope.locationDetail == null) {
								// alert('Null found')
								var locationDetails = {
										locationtId : 0,
										locationName : '',
									description : '',
									edit : ''

								};
								$scope.locationDetail = locationDetails;
								$scope.pageHeader = 'New Location';
								$scope.pagePath = 'Manage Resources / Locations / New Location';
								$scope.saveActionCaption = 'Add';
							} else {
								$scope.pageHeader = $scope.locationDetail.locationName
										+ ' - Edit Location';
								$scope.pagePath = 'Manage Resources / Locations / Edit Location';
								$scope.saveActionCaption = 'Update';
							}
							// alert($scope.companyDetail);
							$scope.config = {
								itemsPerPage : 5,
								fillLastPage : true
							}
						} ]);
