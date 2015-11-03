/**
 * Company Admin Dashboard Controller
 */

pureHydrationAppControllers.controller('companyuserDashboardController', [
		'$scope',
		'$window',
		'AuthService',
		'UNITS',
		'CompanyService',
		'UserService',
		'WaterIntakeService',
		function($scope, $window, AuthService, UNITS, CompanyService,
				UserService, WaterIntakeService) {
			AuthService.checkAuthentication();
			
			$scope.summaryWidget = {};
			$scope.summaryWidget.totalUserWaterLogged = 100;
			$scope.summaryWidget.liquidUnit = UNITS.liquidUnit;
			$scope.summaryWidget.goalAchievedInMonth = 200;
			

			$scope.top5CompanyUser = UserService.getUserDetails();
			

		} ]);

pureHydrationAppControllers
		.controller(
				'MyPerformanceChartController',
				[
						'$scope',
						'WaterIntakeService',
						function($scope, WaterIntakeService) {
							var historyChartLabel = new Array();
							var actualData = new Array();
							var goalData = new Array();

							var waterIntakeHistory = WaterIntakeService
									.getWaterIntakeHistory();
							for (var index = 0; index < waterIntakeHistory.length; index++) {

								historyChartLabel[index] = waterIntakeHistory[index].historyChartLabel;
								actualData[index] = waterIntakeHistory[index].actualData;
								goalData[index] = waterIntakeHistory[index].goalData;
							}

							$scope.labels = historyChartLabel;
							$scope.series = [ 'Actual Data', 'Goal Data' ];
							$scope.data = [ actualData, goalData ];

							// console.log('historyChartLabel:'+historyChartLabel);
							// $scope.labels = ["January", "February", "March",
							// "April", "May", "June", "July"];
							// $scope.series = ['Series A', 'Series B'];
							// $scope.data = [
							// [65, 59, 80, 81, 56, 55, 40],
							// [28, 48, 40, 19, 86, 27, 90]
							// ];
							$scope.lineChartClick = function(points, evt) {
								console.log(points, evt);
							};
						} ]);

