/**
 * Main application controller
 */

pureHydrationAppControllers.controller('AppController', [ '$scope',
		'AuthService', 'USER_ROLES', '$window',
		function($scope, AuthService, USER_ROLES, $window) {
			$scope.user_roles = USER_ROLES
			$scope.loginBean = {};
			$scope.loginBean.loggedIn = AuthService.getStatus();
			$scope.loginBean.currentUser = AuthService.getCurrentUser();
			$scope.loginBean.userRole = AuthService.getUserRole();
			$scope.logout = function() {
				console.log('logout');
				AuthService.setCurrentUser('');
				AuthService.setStatus(false);
				AuthService.setUserRole('');
				$scope.loginBean.loggedIn = AuthService.getStatus();
				$scope.loginBean.currentUser = AuthService.getCurrentUser();
				$scope.loginBean.userRole = AuthService.getUserRole();
				$window.location.href = '#/login';
			}

		} ]);