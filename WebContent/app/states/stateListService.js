/**
 * State Service
 */

pureHydrationServices.factory('StateService', function($http) {
	var states;
	states = [ {
		stateId : 1,
		state : 'Wichita'
	}, {
		stateId : 2,
		state : 'Hongkong'
	}, {
		stateId : 3,
		state : 'Silicon Velly'
	}, {
		stateId : 4,
		state : 'Andrapradesh'
	}, {
		stateId : 5,
		state : 'Florida'
	} ];

	return {
		getStates : function() {
			return states;
		},
		getStateDetailById : function(stateId) {
			var res = alasql('SELECT * FROM ? WHERE stateId = ?', [
					states, parseInt(stateId) ]);
			return res[0];
		}
	};
});