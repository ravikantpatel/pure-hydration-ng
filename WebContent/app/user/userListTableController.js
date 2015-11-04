/**
 * User List Table Controller
 */

pureHydrationAppControllers
		.controller(
				'UserListTableController',
				[
						'$scope',
						'AuthService',
						'$window',
						'UNITS',
						'UserService',

						function($scope, AuthService, $window, UNITS,
								UserService) {

							// alert($scope.companyId)
							$scope.userDetails = UserService
									.getUserDetailByCompanyId($scope.companyId);

							$scope.exportToXLS = function() {
								alasql(
										'SELECT * INTO XLSX("userList.xlsx",{headers:true}) FROM ?',
										[ $scope.userDetails ]);
							};

							$scope.param = {};
							$scope.config = {
								itemsPerPage : 5,
								fillLastPage : true
							}
						} ]);
