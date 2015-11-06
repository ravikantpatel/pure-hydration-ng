/**
 * Location Service
 */

pureHydrationServices.factory('LocationService', function($http,
		PATHS) {
	
	var locationDetails;
	locationDetails = [ {
		locationId : 4001,
		locationName : 'loc01',
		description : 'Location id is 4001',		
		edit : '<a href="#/Detail/location/4001" >Edit</a>'
	}, {
		locationId : 4002,
		locationName : 'loc02',
		description : 'Location id is 4002',		
		edit : '<a href="#/Detail/location/4002" >Edit</a>'
	}, {
		locationId : 4003,
		locationName : 'loc03',
		description : 'Location id is 4003',		
		edit : '<a href="#/Detail/location/4003" >Edit</a>'
	}, {
		locationId : 4004,
		locationName : 'loc04',
		description : 'Location id is 4004',		
		edit : '<a href="#/Detail/location/4004" >Edit</a>'
	} ];

	return {
		getLocationDetails : function() {
			return locationDetails;
		},
		getLocationDetailById : function(locationId) {

			var res = alasql(
					'SELECT * FROM ? WHERE locationId = ?', [
							locationDetails, parseInt(locationId) ]);
			return res;
		}
	};
});