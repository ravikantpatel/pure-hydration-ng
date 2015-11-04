/**
 * Menu Controller
 */

pureHydrationAppControllers.controller('MenuController', [
		'$rootScope',
		'$scope',
		'AuthService',
		'$location',
		'CompanyService',
		function($rootScope, $scope, AuthService, $location, CompanyService) {
			AuthService.checkAuthentication();

			$scope.selectMenu = function(event) {

				angular.element(document.querySelector('li.active'))
						.removeClass('active');
				angular.element(event.target.parentNode).addClass('active');
			};
			var companyDetail = CompanyService
					.getCompanyDetailById($rootScope.loginBean.userCompanyId);
			$scope.companyLogoUrl = companyDetail.companyLogoUrl;
			$scope.selectMenuItem = function(menuItem) {
				AuthService.setSelectedMenuItem(menuItem);
				$rootScope.loginBean.selectedMenuItem = menuItem;
			}

			$scope.isSelected = function(menuItem) {
				return $rootScope.loginBean.selectedMenuItem == menuItem;
			}

		} ]);