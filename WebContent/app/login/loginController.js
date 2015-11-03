/**
 * Login Controller
 */

pureHydrationAppControllers.controller('LoginController',
		[
				'$scope',
				'AuthService',
				'$window',
				'USER_ROLES',
				function($scope, AuthService, $window, USER_ROLES) {
					$scope.loginForm = {};
					$scope.loginForm.emailId = "";
					$scope.loginForm.password = "";

					AuthService.checkLocalStorage();
					if (AuthService.getStatus() == true) {
						AuthService.setSelectedMenuItem(AuthService
								.getDashboardType()
								+ 'Dashboard');
						$scope.loginBean.selectedMenuItem = AuthService
								.getDashboardType()
								+ 'Dashboard';
						$window.location.href = '#/dashboard/'
								+ AuthService.getDashboardType().toLowerCase();
					}

					$scope.login = function() {

						if ($scope.loginForm.emailId == 'super@test.com'
								&& $scope.loginForm.password == 'test') {

							AuthService.setCurrentUser('Super Admin');
							AuthService.setStatus(true);
							AuthService.setUserRole(USER_ROLES.SUPER_ADMIN);
							AuthService.setUserCompanyId(105);

						} else if ($scope.loginForm.emailId == 'admin@test.com'
								&& $scope.loginForm.password == 'test') {
							AuthService.setCurrentUser('Company Admin');
							AuthService.setStatus(true);
							AuthService.setUserRole(USER_ROLES.COMPANY_ADMIN);
							AuthService.setUserCompanyId(105);

						} else if ($scope.loginForm.emailId == 'user@test.com'
								&& $scope.loginForm.password == 'test') {
							AuthService.setCurrentUser('Company User');
							AuthService.setStatus(true);
							AuthService.setUserRole(USER_ROLES.COMPANY_USER);
							AuthService.setUserCompanyId(105);
						}
						$scope.loginBean.loggedIn = AuthService.getStatus();
						if ($scope.loginBean.loggedIn == true) {

							$scope.loginBean.currentUser = AuthService
									.getCurrentUser();
							$scope.loginBean.userRole = AuthService
									.getUserRole();
							var dashboardType = AuthService.getDashboardType();
							AuthService.setSelectedMenuItem(dashboardType
									+ 'Dashboard');
							$scope.loginBean.selectedMenuItem = dashboardType
									+ 'Dashboard';
							$window.location.href = '#/dashboard/'
									+ dashboardType.toLowerCase();
						}
					};
					function encodeCredentials(pwd) {
						return $base64.encode(pwd);
					}
					;
				} ]);