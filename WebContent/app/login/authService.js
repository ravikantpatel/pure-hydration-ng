/**
 * Authentication Service
 */

pureHydrationServices.factory('AuthService',
		function($http, $localStorage, $window) {
			var storage = $localStorage.$default({
				loggedIn : false,
				currentUser : '',
				userRole : '',
				selectedMenuItem : '',
				companyId : 0,
				userId : 0,
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
					return storage.userRole.role;
				},
				getDashboardType : function() {
					return storage.userRole.dashboardType;
				},
				setUserRole : function(role) {
					storage.userRole = role;
				},
				getTimeStamp : function() {
					storage.loginTimeStamp;
				},
				setSelectedMenuItem : function(menuItem) {
					storage.selectedMenuItem = menuItem;
				},
				getSelectedMenuItem : function() {
					return storage.selectedMenuItem;
				},
				setUserCompanyId : function(companyId) {
					storage.companyId = companyId;
				},
				getUserCompanyId : function() {
					return storage.companyId;
				},
				setUserId : function(userId) {
					storage.userId = userId;
				},
				getUserId : function() {
					return storage.userId;
				},
				checkLocalStorage : function() {
					// console.log('Diff::'+ (new Date().getTime() -
					// storage.loginTimeStamp)/(1000*60));
					if ((new Date().getTime() - storage.loginTimeStamp)
							/ (1000 * 60) > 20) {
						storage.currentUser = '';
						storage.loggedIn = false;
						storage.userRole = '';
						storage.loginTimeStamp = new Date().getTime();
					}
				},
				checkAuthentication : function(){
					if(storage.loggedIn == false || storage.loggedIn != true){
						$window.location.href = '#/login';
					}
				}
			};
		});