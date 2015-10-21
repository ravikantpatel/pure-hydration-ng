/**
 * Menu Controller
 */

pureHydrationAppControllers.controller('MenuController', [
		'$scope',
		'AuthService',
		'USER_ROLES',
		function($scope, AuthService, USER_ROLES) {
			$scope.user_roles = USER_ROLES
			$scope.loginBean = {};
			$scope.loginBean.loggedIn = AuthService.getStatus();
			$scope.loginBean.currentUser = AuthService.getCurrentUser();
			$scope.loginBean.userRole = AuthService.getUserRole();
			
			$scope.selectMenu = function(event) {

				angular.element(document.querySelector('li.active'))
						.removeClass('active');
				angular.element(event.target.parentNode).addClass('active');
			}

		} ]);