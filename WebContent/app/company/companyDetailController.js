/**
 * Company List Controller
 */

pureHydrationAppControllers.controller('CompanyDetailController', [
		'$scope',
		'AuthService',
		'$window',
		'UNITS',
		'CompanyService',
		'CountryService',
		'StateService',
		'$routeParams',
		'UserService',
		function($scope, AuthService, $window, UNITS, CompanyService,
				CountryService, StateService, $routeParams, UserService) {
			if (AuthService.getStatus() == false) {
				$window.location.href = '#/login';
			}

			$scope.companyLogoUrl = 'assets/images/logo_mailenable.png';

			$scope.companyDetail = CompanyService
					.getCompanyDetailById($routeParams.id);
			console.log('$routeParams.id:'+$routeParams.id)
			// alert($scope.companyDetail.companyName);
			$scope.countryList = CountryService.getCountries();
			$scope.stateList = StateService.getStates();

			if ($scope.companyDetail == null) {
				// alert('Null found')
				var companyDetails = {
					companyId : 0,
					companyName : '',
					users : 0,
					completedBluePrint : 0,
					waterConsumption : 0,
					goalMet : 0,
					companySince : 0,
					address1 : '',
					address2 : '',
					city : '',
					state : '',
					postalCode : '',
					contactNo : '',
					website : '',
					emailId : '',
					status : '',
					link : ''
				};
				$scope.companyDetail = companyDetails;
				$scope.pageHeader = 'New Company Profile';
				$scope.pagePath = 'Company List / Create Company';
				$scope.saveActionCaption = 'Create';
			} else {
				$scope.pageHeader = $scope.companyDetail.companyName
						+ ' - Edit Company Profile ';
				$scope.pagePath = 'Company List / Edit Company';
				$scope.saveActionCaption = 'Update';
			}
			$scope.userDetails = UserService.getUserDetails();
			// alert($scope.companyDetail.companyName);
			$scope.config = {
				itemsPerPage : 5,
				fillLastPage : true
			}
		} ]);
