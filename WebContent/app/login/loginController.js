/**
 * Login Controller
 */

pureHydrationAppControllers.controller('LoginController', [
		'$scope',
		'AuthService',
		'$window',
		function($scope, AuthService, $window) {
			$scope.loginForm = {};
			$scope.loginForm.emailId = "";
			$scope.loginForm.password = "";
			
			AuthService.checkLocalStorage();
			if (AuthService.getStatus() == true) {
				$window.location.href = '#/dashboard';
			}

			$scope.login = function() {
				if ($scope.loginForm.emailId == 'rk14.patel@gmail.com'
						&& $scope.loginForm.password == 'kant') {

					AuthService.setCurrentUser('Ravikant Patel');
					AuthService.setStatus(true);
					AuthService.setUserRole('SUPER_ADMIN');
				} else {
					AuthService.setCurrentUser('Guest');
					AuthService.setStatus(false);
					AuthService.setUserRole('GUEST');
				}
				$scope.loginBean.loggedIn = AuthService.getStatus();
				$scope.loginBean.currentUser = AuthService.getCurrentUser();
				$scope.loginBean.userRole = AuthService.getUserRole();
				$window.location.href = '#/dashboard';
			}
		} ]);