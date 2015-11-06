/**
 * Group Service
 */

pureHydrationServices.factory('GroupService', function($http,
		PATHS) {
	
	var groupDetails;
	groupDetails = [ {
		groupId : 5001,
		groupName : 'grp01',
		description : 'Group id is 5001',		
		edit : '<a href="#/Detail/group/5001" >Edit</a>'
	}, {
		groupId : 5002,
		groupName : 'grp02',
		description : 'Group id is 5002',		
		edit : '<a href="#/Detail/group/5002" >Edit</a>'
	}, {
		groupId : 5003,
		groupName : 'grp03',
		description : 'Group id is 5003',		
		edit : '<a href="#/Detail/group/5003" >Edit</a>'
	}, {
		groupId : 5004,
		groupName : 'grp04',
		description : 'Group id is 5004',		
		edit : '<a href="#/Detail/group/5004" >Edit</a>'
	} ];

	return {
		getGroupDetails : function() {
			return groupDetails;
		},
		getGroupDetailById : function(groupId) {

			var res = alasql(
					'SELECT * FROM ? WHERE groupId = ?', [
							groupDetails, parseInt(groupId) ]);
			return res;
		}
	};
});