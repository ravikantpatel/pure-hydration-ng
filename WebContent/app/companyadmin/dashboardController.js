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
			
			$scope.pagePath = 'Dashboard';
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

							
							$scope.myDataSource = {
					                chart: {
					                	"xAxisName": "Day",
					                    "yAxisName": "No. of Visitors",
					                    "lineThickness": "2",
					                    "paletteColors": "#0075c2",
					                    "baseFontColor": "#333333",
					                    "baseFont": "Helvetica Neue,Arial",
					                    "captionFontSize": "14",
					                    "subcaptionFontSize": "14",
					                    "subcaptionFontBold": "0",
					                    "showBorder": "0",
					                    "bgColor": "#ffffff",
					                    "showShadow": "0",
					                    "canvasBgColor": "#ffffff",
					                    "canvasBorderAlpha": "0",
					                    "divlineAlpha": "100",
					                    "divlineColor": "#999999",
					                    "divlineThickness": "1",
					                    "divLineDashed": "1",
					                    "divLineDashLen": "1",
					                    "divLineGapLen": "1",
					                    "showXAxisLine": "1",
					                    "xAxisLineThickness": "1",
					                    "xAxisLineColor": "#999999",
					                    "showAlternateHGridColor": "0"
					                },
					                data:[{
					                    label: "Bakersfield Central",
					                    value: "880000"
					                },
					                {
					                    label: "Garden Groove harbour",
					                    value: "730000"
					                },
					                {
					                    label: "Los Angeles Topanga",
					                    value: "590000"
					                },
					                {
					                    label: "Compton-Rancho Dom",
					                    value: "520000"
					                },
					                {
					                    label: "Daly City Serramonte",
					                    value: "330000"
					                }]
					              };
					           
							
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
							$scope.myDataSource = {
								    chart: {
								        //caption: "Age profile of website visitors",
								    	"paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
								        "bgColor": "#ffffff",
								        "showBorder": "0",
								        "use3DLighting": "0",
								        "showShadow": "0",
								        "enableSmartLabels": "0",
								        "startingAngle": "0",
								        "showPercentValues": "0",
								        "showPercentInTooltip": "1",
								        "decimals": "1",
								        "captionFontSize": "14",
								        "subcaptionFontSize": "14",
								        "subcaptionFontBold": "0",
								        "toolTipColor": "#ffffff",
								        "toolTipBorderThickness": "0",
								        "toolTipBgColor": "#000000",
								        "toolTipBgAlpha": "80",
								        "toolTipBorderRadius": "2",
								        "toolTipPadding": "5",
								        "showHoverEffect": "1",
								        "showLegend": "0",
								        "legendBgColor": "#ffffff",
								        "legendBorderAlpha": "0",
								        "legendShadow": "0",
								        "legendItemFontSize": "10",
								        "legendItemFontColor": "#666666",
								        "useDataPlotColorForLabels": "1",
							        	"exportEnabled" : "1",
							        	"exportAtClientSide" : "1"
								    },
								    data: [
								        {
								            label: "Teenage",
								            value: "1250400"
								        },
								        {
								            label: "Adult",
								            value: "1463300"
								        },
								        {
								            label: "Mid-age",
								            value: "1050700"
								        },
								        {
								            label: "Senior",
								            value: "491000"
								        }
								    ]
								}
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