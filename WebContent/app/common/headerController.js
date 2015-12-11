/**
 * Header Controller
 */

pureHydrationAppControllers.controller('HeaderController', [ '$rootScope','$scope',
		'AuthService', '$window',
		function($rootScope,$scope, AuthService, $window) {

			function logout() {
				AuthService.setCurrentUser('');
				AuthService.setStatus(false);
				AuthService.setUserRole('');
				$rootScope.loginBean.loggedIn = AuthService.getStatus();
				$rootScope.loginBean.currentUser = AuthService.getCurrentUser();
				$rootScope.loginBean.userRole = AuthService.getUserRole();
				$window.location.href = '#/login';
			}

			$scope.logout = function() {
				AuthService.setCurrentUser('');
				AuthService.setStatus(false);
				AuthService.setUserRole('');
				$rootScope.loginBean.loggedIn = AuthService.getStatus();
				$rootScope.loginBean.currentUser = AuthService.getCurrentUser();
				$rootScope.loginBean.userRole = AuthService.getUserRole();
				$window.location.href = '#/login';
			}
			
			$scope.redirectToDashboard = function(dashboard) {
				$rootScope.loginBean.selectedMenuItem =dashboard;
			}

			$scope.$on('IdleTimeout', function() {
				logout();
				$rootScope.logoutApp();
			});
		} ]);