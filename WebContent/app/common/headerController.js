/**
 * Header Controller
 */

pureHydrationAppControllers.controller('HeaderController', [ '$scope',
		'AuthService', 'USER_ROLES', '$window',
		function($scope, AuthService, USER_ROLES, $window) {

			function logout() {
				AuthService.setCurrentUser('');
				AuthService.setStatus(false);
				AuthService.setUserRole('');
				$scope.loginBean.loggedIn = AuthService.getStatus();
				$scope.loginBean.currentUser = AuthService.getCurrentUser();
				$scope.loginBean.userRole = AuthService.getUserRole();
				$window.location.href = '#/login';
			}

			$scope.logout = function() {
				AuthService.setCurrentUser('');
				AuthService.setStatus(false);
				AuthService.setUserRole('');
				$scope.loginBean.loggedIn = AuthService.getStatus();
				$scope.loginBean.currentUser = AuthService.getCurrentUser();
				$scope.loginBean.userRole = AuthService.getUserRole();
				$window.location.href = '#/login';
			}

			$scope.$on('IdleTimeout', function() {
				logout();
			});
		} ]);