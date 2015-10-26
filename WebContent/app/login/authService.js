/**
 * Authentication Service
 */

pureHydrationServices.factory('AuthService', function($http, $localStorage) {
	var storage = $localStorage.$default({
		loggedIn : false,
		currentUser : '',
		userRole : '',
		loginTimeStamp : new Date().getTime()
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
		},
		getTimeStamp : function() {
			storage.loginTimeStamp;
		},
		checkLocalStorage : function(){
			console.log('Diff::'+ (new Date().getTime() - storage.loginTimeStamp)/(1000*60));
			if((new Date().getTime() - storage.loginTimeStamp)/(1000*60) > 20){
				storage.currentUser = '';
				storage.loggedIn = false;
				storage.userRole ='';
				storage.loginTimeStamp = new Date().getTime();
			}
		}
	};
});