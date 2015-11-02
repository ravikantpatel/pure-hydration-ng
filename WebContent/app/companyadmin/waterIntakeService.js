/**
 * Water Intake Data
 */

pureHydrationServices.factory('WaterIntakeService', function($http,
		$localStorage) {

	var waterIntakeHistory;

	waterIntakeHistory = [ {
		historyChartLabel : 'Nov-2014',
		actualData : 200,
		goalData : 159
	}, {
		historyChartLabel : 'Dec-2014',
		actualData : 159,
		goalData : 65
	}, {
		historyChartLabel : 'Jan-2015',
		actualData : 125,
		goalData : 56
	}, {
		historyChartLabel : 'Feb-2015',
		actualData : 88,
		goalData : 68
	}, {
		historyChartLabel : 'Mar-2015',
		actualData : 60,
		goalData : 50
	}, {
		historyChartLabel : 'Apr-2015',
		actualData : 100,
		goalData : 100
	}, {
		historyChartLabel : 'May-2015',
		actualData : 244,
		goalData : 255
	}, {
		historyChartLabel : 'Jun-2015',
		actualData : 200,
		goalData : 56
	}, {
		historyChartLabel : 'Jul-2015',
		actualData : 100,
		goalData : 123
	}, {
		historyChartLabel : 'Aug-2015',
		actualData : 10,
		goalData : 64
	}, {
		historyChartLabel : 'Sep-2015',
		actualData : 10,
		goalData : 23
	}, {
		historyChartLabel : 'Oct-2015',
		actualData : 100,
		goalData : 50
	} ];

	var departmentwiseWaterIntakeHistory;
	departmentwiseWaterIntakeHistory = [ {
		label : 'Human Resource',
		data : 100
	}, {
		label : 'Accounts',
		data : 78
	}, {
		label : 'Designers',
		data : 95
	}, {
		label : 'Developers',
		data : 66
	}, {
		label : 'Quality Control',
		data : 25
	} ];
	
	var locationwiseWaterIntakeHistory;
	locationwiseWaterIntakeHistory = [ {
		label : 'Delhi',
		data : 100
	}, {
		label : 'Ahmedabad',
		data : 78
	}, {
		label : 'Mumbai',
		data : 95
	}, {
		label : 'Banglore',
		data : 66
	}, {
		label : 'Chennai',
		data : 25
	} ];
	
	var femaleVsMaleWaterIntakeHistory;

	femaleVsMaleWaterIntakeHistory = [ {
		chartLabel : 'Nov-2014',
		femaleData : 200,
		maleData : 159
	}, {
		chartLabel : 'Dec-2014',
		femaleData : 159,
		maleData : 65
	}, {
		chartLabel : 'Jan-2015',
		femaleData : 125,
		maleData : 56
	}, {
		chartLabel : 'Feb-2015',
		femaleData : 88,
		maleData : 68
	}, {
		chartLabel : 'Mar-2015',
		femaleData : 60,
		maleData : 50
	}, {
		chartLabel : 'Apr-2015',
		femaleData : 100,
		maleData : 100
	}, {
		chartLabel : 'May-2015',
		femaleData : 244,
		maleData : 255
	}, {
		chartLabel : 'Jun-2015',
		femaleData : 200,
		maleData : 56
	}, {
		chartLabel : 'Jul-2015',
		femaleData : 100,
		maleData : 123
	}, {
		chartLabel : 'Aug-2015',
		femaleData : 10,
		maleData : 64
	}, {
		chartLabel : 'Sep-2015',
		femaleData : 10,
		maleData : 23
	}, {
		chartLabel : 'Oct-2015',
		femaleData : 100,
		maleData : 50
	} ];
	
	return {
		getWaterIntakeHistory : function() {
			return waterIntakeHistory;
		},
		getDepartmentwiseWaterIntakeHistory : function(){
			return departmentwiseWaterIntakeHistory;
		},
		getLocationwiseWaterIntakeHistory : function(){
			return locationwiseWaterIntakeHistory;
		},
		getFemaleVsMaleWaterIntakeHistory : function() {
			return femaleVsMaleWaterIntakeHistory;
		}
	};

});