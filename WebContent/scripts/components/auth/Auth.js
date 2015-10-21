/**
 * Authentication Service
 */

pureHydrationServices.factory('AuthService', function($http, $localStorage) {
	var storage = $localStorage.$default({
		loggedIn : false,
		currentUser : '',
		userRole : ''
       });
	return {
		getStatus : function() {
			return storage.loggedIn;
		},
		setStatus : function(value) {
			storage.loggedIn = value;
		},
		getCurrentUser : function() {
			return storage.currentUser;
		},
		setCurrentUser : function(loggedInUser) {
			storage.currentUser = loggedInUser;
		},
		getUserRole : function() {
			return storage.userRole;
		},
		setUserRole : function(role) {
			storage.userRole = role;
		}
	};
});