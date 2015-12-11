/**
 * Menu Controller
 */

pureHydrationAppControllers
		.controller(
				'MenuController',
				[
						'$rootScope',
						'$scope',
						'AuthService',
						'$location',
						'CompanyService',
						'GAuth',
						'GData',
						function($rootScope, $scope, AuthService, $location,
								CompanyService, GAuth, GData) {
							AuthService.checkAuthentication();

							$scope.selectMenu = function(event) {

								angular.element(
										document.querySelector('li.active'))
										.removeClass('active');
								angular.element(event.target.parentNode)
										.addClass('active');
							};
							if (GData != null && GData.getUser()!= null) {
								$scope.companyLogoUrl = GData.getUser().picture;
							} else {

								var companyDetail = CompanyService
										.getCompanyDetailById($rootScope.loginBean.userCompanyId);
								$scope.companyLogoUrl = companyDetail.companyLogoUrl;
							}
							$scope.selectMenuItem = function(menuItem) {
								AuthService.setSelectedMenuItem(menuItem);
								$rootScope.loginBean.selectedMenuItem = menuItem;
							}

							$scope.isSelected = function(menuItem) {
								return $rootScope.loginBean.selectedMenuItem == menuItem;
							}

						} ]);