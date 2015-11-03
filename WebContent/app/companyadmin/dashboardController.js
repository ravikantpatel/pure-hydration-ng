/**
 * Company Admin Dashboard Controller
 */

pureHydrationAppControllers.controller('companyadminDashboardController', [
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
			$scope.summaryWidget.totalCompanyWaterLogged = 100;
			$scope.summaryWidget.liquidUnit = UNITS.liquidUnit;
			$scope.summaryWidget.totalCompanyGoal = 200;
			$scope.summaryWidget.totalCompanyActiveUsers = 14;
			$scope.summaryWidget.completed12DBluePrint = 11;

			$scope.top10CompanyUser = UserService.getUserDetails();
			
		} ]);

pureHydrationAppControllers
		.controller(
				'CompanyPerformanceChartController',
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

pureHydrationAppControllers
		.controller(
				'WaterByDepartmentChartController',
				[
						'$scope',
						'WaterIntakeService',
						function($scope, WaterIntakeService) {

							var departmentwiseWaterIntakeChartLabel = new Array();
							var departmentwiseWaterIntakeChartData = new Array();

							var departmentwiseWaterIntakeHistory = WaterIntakeService
									.getDepartmentwiseWaterIntakeHistory();

							for (var index = 0; index < departmentwiseWaterIntakeHistory.length; index++) {
								departmentwiseWaterIntakeChartLabel[index] = departmentwiseWaterIntakeHistory[index].label;
								departmentwiseWaterIntakeChartData[index] = departmentwiseWaterIntakeHistory[index].data;
							}
							$scope.labels = departmentwiseWaterIntakeChartLabel;
							$scope.data = departmentwiseWaterIntakeChartData;
						} ]);

pureHydrationAppControllers
		.controller(
				'WaterByLocationChartController',
				[
						'$scope',
						'WaterIntakeService',
						function($scope, WaterIntakeService) {

							var locationwiseWaterIntakeChartLabel = new Array();
							var locationwiseWaterIntakeChartData = new Array();

							var locationwiseWaterIntakeHistory = WaterIntakeService
									.getLocationwiseWaterIntakeHistory();

							for (var index = 0; index < locationwiseWaterIntakeHistory.length; index++) {
								locationwiseWaterIntakeChartLabel[index] = locationwiseWaterIntakeHistory[index].label;
								locationwiseWaterIntakeChartData[index] = locationwiseWaterIntakeHistory[index].data;
							}
							$scope.labels = locationwiseWaterIntakeChartLabel;
							$scope.data = locationwiseWaterIntakeChartData;
						} ]);
pureHydrationAppControllers
.controller(
		'FemaleVsMaleChartController',
		[
				'$scope',
				'WaterIntakeService',
				function($scope, WaterIntakeService) {
					var femaleVsMaleChartLabel = new Array();
					var femaleData = new Array();
					var maleData = new Array();

					var waterIntakeHistory = WaterIntakeService
							.getFemaleVsMaleWaterIntakeHistory();
					for (var index = 0; index < waterIntakeHistory.length; index++) {

						femaleVsMaleChartLabel[index] = waterIntakeHistory[index].chartLabel;
						femaleData[index] = waterIntakeHistory[index].femaleData;
						maleData[index] = waterIntakeHistory[index].maleData;
					}

					$scope.labels = femaleVsMaleChartLabel;
					$scope.series = [ 'Female', 'Male' ];
					$scope.data = [ femaleData, maleData ];

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