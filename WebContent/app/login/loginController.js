/**
 * Login Controller
 */

pureHydrationAppControllers.controller('LoginController', [
		'$rootScope',
		'$scope',
		'AuthService',
		'$window',
		'USER_ROLES',
		function($rootScope, $scope, AuthService, $window, USER_ROLES) {
			$scope.loginForm = {};
			$scope.loginForm.emailId = "";
			$scope.loginForm.password = "";

			AuthService.checkLocalStorage();
			if (AuthService.getStatus() == true) {
				AuthService.setSelectedMenuItem(AuthService.getDashboardType()
						+ 'Dashboard');
				$rootScope.loginBean.selectedMenuItem = AuthService
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
					AuthService.setUserId(1);

				} else if ($scope.loginForm.emailId == 'admin@test.com'
						&& $scope.loginForm.password == 'test') {
					AuthService.setCurrentUser('Company Admin');
					AuthService.setStatus(true);
					AuthService.setUserRole(USER_ROLES.COMPANY_ADMIN);
					AuthService.setUserCompanyId(105);
					AuthService.setUserId(2);

				} else if ($scope.loginForm.emailId == 'user@test.com'
						&& $scope.loginForm.password == 'test') {
					AuthService.setCurrentUser('Company User');
					AuthService.setStatus(true);
					AuthService.setUserRole(USER_ROLES.COMPANY_USER);
					AuthService.setUserCompanyId(105);
					AuthService.setUserId(4);
				}
				$rootScope.loginBean.loggedIn = AuthService.getStatus();
				if ($rootScope.loginBean.loggedIn == true) {

					$rootScope.loginBean.currentUser = AuthService
							.getCurrentUser();
					$rootScope.loginBean.userRole = AuthService.getUserRole();
					var dashboardType = AuthService.getDashboardType();
					AuthService
							.setSelectedMenuItem(dashboardType + 'Dashboard');
					$rootScope.loginBean.selectedMenuItem = dashboardType
							+ 'Dashboard';
					$rootScope.loginBean.userCompanyId = AuthService
							.getUserCompanyId();
					$window.location.href = '#/dashboard/'
							+ dashboardType.toLowerCase();
				}
			};
			function encodeCredentials(pwd) {
				return $base64.encode(pwd);
			}
			;
		} ]);