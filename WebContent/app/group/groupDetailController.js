/**
 * Group Detail Controller
 */

pureHydrationAppControllers
		.controller(
				'GroupDetailController',
				[
						'$scope',
						'AuthService',
						'$window',
						'UNITS',
						'GroupService',
						'CountryService',
						'StateService',
						'$routeParams',
						'UserService',
						function($scope, AuthService, $window, UNITS,
								GroupService, CountryService,
								StateService, $routeParams, UserService) {

							$scope.groupDetail = GroupService
									.getGroupDetailById($routeParams.id);
							console.log('$routeParams.id:' + $routeParams.id)
							// alert($scope.companyDetail.companyName);

							if ($scope.groupDetail == null) {
								// alert('Null found')
								var groupDetails = {
									groupId : 0,
									groupName : '',
									description : '',
									edit : ''

								};
								$scope.groupDetail = groupDetails;
								$scope.pageHeader = 'New Group';
								$scope.pagePath = 'Manage Resources / Groups / New Group';
								$scope.saveActionCaption = 'Add';
							} else {
								$scope.pageHeader = $scope.groupDetail.groupName
										+ ' - Edit Group';
								$scope.pagePath = 'Manage Resources / Groups / Edit Group';
								$scope.saveActionCaption = 'Update';
							}
							// alert($scope.companyDetail);
							$scope.config = {
								itemsPerPage : 5,
								fillLastPage : true
							}
						} ]);
