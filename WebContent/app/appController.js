/**
 * Main application controller
 */

pureHydrationAppControllers.controller('AppController',
		[
				'$rootScope',
				'$scope',
				'AuthService',
				'USER_ROLES',
				'$window',
				function($rootScope, $scope, AuthService, USER_ROLES, $window) {

					$rootScope.user_roles = USER_ROLES
					$rootScope.loginBean = {};
					$rootScope.loginBean.loggedIn = AuthService.getStatus();
					$rootScope.loginBean.currentUser = AuthService
							.getCurrentUser();
					$rootScope.loginBean.userRole = AuthService.getUserRole();
					$rootScope.loginBean.userCompanyId = AuthService
							.getUserCompanyId();
					$rootScope.loginBean.selectedMenuItem = AuthService
							.getSelectedMenuItem();
					$rootScope.loginBean.userId = AuthService.getUserId();
				} ]);