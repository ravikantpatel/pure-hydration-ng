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
									"chart": {
							
					 	        "caption": "User type (Sub / Annoy)",
						 	       "subCaption": $scope.chartSubCaption,
						 	        "xAxisName": "Date",
						 	        "yAxisName": "# Users",	 	        
						 	        "paletteColors": "#0075c2,#1aaf5d",
						 	        "bgColor": "#ffffff",
						 	        "showBorder": "0",
						 	        "showCanvasBorder": "0",
						 	        "plotBorderAlpha": "10",
						 	        "usePlotGradientColor": "0",
						 	        "legendBorderAlpha": "0",
						 	        "legendShadow": "0",
						 	        "plotFillAlpha": "60",
						 	        "showXAxisLine": "1",
						 	        "axisLineAlpha": "25",
						 	        "showValues": "0",
						 	        "captionFontSize": "14",
						 	        "subcaptionFontSize": "14",
						 	        "subcaptionFontBold": "0",
						 	        "divlineColor": "#999999",
						 	        "divLineDashed": "1",
						 	        "divLineDashLen": "1",
						 	        "divLineGapLen": "1",
						 	        "showAlternateHGridColor": "0",
						 	        "toolTipColor": "#ffffff",
						 	        "toolTipBorderThickness": "0",
						 	        "toolTipBgColor": "#000000",
						 	        "toolTipBgAlpha": "80",
						 	        "toolTipBorderRadius": "2",
						 	        "toolTipPadding": "5",
						 	        "labelDisplay": "rotate",
						 	        "slantLabels": "1",
						 	    },
						 	    "categories": [
						 	  	 	        {
						 		 	            "category": [
						 		 	                {
						 		 	                    "label": "Sun-01-Nov-15"
						 		 	                },
						 		 	                {
						 		 	                	"label": "Mon-02-Nov-15"
						 		 	                },
						 		 	                {
						 		 	                	"label": "Tue-03-Nov-15"
						 		 	                },	 	                
						 		 	                {
						 		 	                    "label": "Wed-04-Nov-15"
						 		 	                },
						 		 	                {
						 		 	                    "label": "Thu-05-Nov-15"
						 		 	                },
						 		 	                {
						 		 	                    "label": "Fri-06-Nov-15"
						 		 	                }
						 		 	            ]
						 		 	        }
						 		 	    ],
						 		 	    "dataset": [
						 		 	        {
						 		 	            "seriesname": "User Annoy",
						 		 	            "color": "#5B9BD5",
						 		 	            "data": [
						 		 	                {
						 		 	                    "value": "13000"
						 		 	                },
						 		 	                {
						 		 	                    "value": "14500"
						 		 	                },
						 		 	                {
						 		 	                    "value": "13500"
						 		 	                },
						 		 	                {
						 		 	                    "value": "15000"
						 		 	                },
						 		 	                {
						 		 	                    "value": "15500"
						 		 	                },
						 		 	                {
						 		 	                    "value": "17650"
						 		 	                }
						 		 	            ]
						 		 	        },
						 		 	        {
						 		 	            "seriesname": "User Sub",
						 		 	            "color": "#ED7D31",
						 		 	            "data": [
						 		 	                {
						 		 	                    "value": "8400"
						 		 	                },
						 		 	                {
						 		 	                    "value": "9800"
						 		 	                },
						 		 	                {
						 		 	                    "value": "11800"
						 		 	                },
						 		 	                {
						 		 	                    "value": "14400"
						 		 	                },
						 		 	                {
						 		 	                    "value": "18800"
						 		 	                },
						 		 	                {
						 		 	                    "value": "24800"
						 		 	                }
						 		 	            ]
						 		 	        }
						 		 	        ]
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