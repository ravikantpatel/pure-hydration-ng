/**
 * Company List Controller
 */

pureHydrationAppControllers
		.controller(
				'CompanyDetailController',
				[
						'$scope',
						'AuthService',
						'$window',
						'UNITS',
						'CompanyService',
						function($scope, AuthService, $window, UNITS,
								CompanyService) {
							if (AuthService.getStatus() == false) {
								$window.location.href = '#/login';
							}
							$scope.pagePath = 'Company List / Create Company';
							$scope.pageHeader = 'New Company Profile';
							$scope.saveActionCaption = 'Create';
							$scope.companyLogoUrl = 'resources/images/logo_mailenable.png';
							 $scope.companyDetail =
							 CompanyService.getCompanyDetailById(150);
							// if ($scope.companyDetails == null) {
//							
//							var companyDetails = {
//								companyId : 0,
//								companyName : 'test',
//								users : 0,
//								completedBluePrint : 0,
//								waterConsumption : 0,
//								goalMet : 0,
//								companySince : 0,
//								address1 : '',
//								address2 : '',
//								city : '',
//								state : '',
//								postalCode : '',
//								contactNo : '',
//								website : '',
//								emailId : '',
//								status : '',
//								link : ''
//							};
//							$scope.companyDetail  = companyDetails; 
							// }
							$scope.userDetails = [
									{
										userId : 1,
										firstName : 'Ravikant',
										lastName : 'Patel',
										department : 'IT',
										emailId : 'rk14.patel@gmail.com',
										type : 'super_admin',
										status : 'Active',
										link : '<a href="#/editCompany:105" onclick="this.parentNode.submit()">Edit</a>'
									},
									{
										userId : 2,
										firstName : 'Arun',
										lastName : 'Patel',
										department : 'IT',
										emailId : 'rk14.patel@gmail.com',
										type : 'super_admin',
										status : 'Active',
										link : '<a href="#/editCompany:105" onclick="this.parentNode.submit()">Edit</a>'
									},
									{
										userId : 3,
										firstName : 'Vipul',
										lastName : 'Vaghela',
										department : 'IT',
										emailId : 'rk14.patel@gmail.com',
										type : 'super_admin',
										status : 'Active',
										link : '<a href="#/editCompany:105" onclick="this.parentNode.submit()">Edit</a>'
									} ];
							alert($scope.companyDetail.companyName);
							$scope.config = {
								itemsPerPage : 5,
								fillLastPage : true
							}
						} ]);

pureHydrationApp.directive("bootstrapTable", function() {
	return function(scope, element, attrs) {
		scope.$watch("userDetails", function() {
			// alert('message');
			$table = $('#userListTable').bootstrapTable({
				data : scope.companyDetails
			});
		});
	};
});
