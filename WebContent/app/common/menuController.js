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
						'$translate',
						'$window',
						function($rootScope, $scope, AuthService, $location,
								CompanyService, GAuth, GData, $translate,$window) {
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
							
							$scope.browserLocale = $window.navigator.language || $window.navigator.userLanguage;
							
							$scope.languages = {									
						    		selectedOption : $translate.use(),
						    		optionsList : [
						                   		{ name: 'English', value: 'en'},
						                   		{ name: 'German', value: 'de'},
						                   ]
							    }
							
							
							$scope.$watch(
						 			"languages.selectedOption",
						 			function handleChange(newValue, oldValue) {
						 				$translate.use($scope.languages.selectedOption); 
						 			}
				 			);
							
						} ]);