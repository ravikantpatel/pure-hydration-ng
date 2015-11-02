/**
 * Menu Controller
 */

pureHydrationAppControllers.controller('MenuController', [
		'$scope',
		'AuthService',
		'USER_ROLES',
		'$location',
		function($scope, AuthService, USER_ROLES, $location) {

			$scope.user_roles = USER_ROLES

			$scope.selectMenu = function(event) {

				angular.element(document.querySelector('li.active'))
						.removeClass('active');
				angular.element(event.target.parentNode).addClass('active');
			};

			$scope.selectMenuItem = function(menuItem) {
				AuthService.setSelectedMenuItem(menuItem);
				$scope.loginBean.selectedMenuItem = menuItem;
			}

			$scope.isSelected = function(menuItem) {
				return $scope.loginBean.selectedMenuItem == menuItem;
			}

		} ]);