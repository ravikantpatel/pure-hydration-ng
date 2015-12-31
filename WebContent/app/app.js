/**
 * Main app file and configurations
 */

'use strict';
pureHydrationApp.run([ 'Idle', 'InitDataService','GAuth', 'GApi', 'GData','$rootScope',
		function(Idle, InitDataService,GAuth, GApi, GData,$rootScope) {
			Idle.watch();
			// Init Temp data for real-time manupulation
			InitDataService.initAppData();
			
			
			$rootScope.gdata = GData;

	        var CLIENT = '336363641999-597q4f5rrekh0ncif229ramoj9vqlo1r.apps.googleusercontent.com';
	       
	        GAuth.setClient(CLIENT);
	        GAuth.setScope('https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly');
	        GAuth.checkAuth().then(
	            function () {
	                console.log('Logged in...');
	            },
	            function() {
	            	console.log('Not Logged in...');
	            }
	        );

	        $rootScope.logoutApp = function() {
	            GAuth.logout().then(
	            function () {
	            	 console.log('Logged out...');
	            });
	        };
			
			
		} ]);
/*
 * pureHydrationApp.directive('myDirective', function() { return { restrict :
 * 'E', replace: true, templateUrl: "pages/common/header.html" } });
 */

pureHydrationApp.config([ '$routeProvider', 'KeepaliveProvider',
		'IdleProvider','$translateProvider',
		function($routeProvider, KeepaliveProvider, IdleProvider,$translateProvider) {

			
			$translateProvider.useStaticFilesLoader({
				  prefix: 'assets/languages/locale-',
				  suffix: '.json'
				});
			
			/*$translateProvider.translations('en', {
				DASHBOARD : 'Dashboard',
				COMPANY_LIST: 'Company List',
				MANAGE_RESOURCES : 'Manage Resources',
				RESOURCES : 'Resources',
				COMPANY_PROFILE : 'Company Profile',
				COMPANY_USERS : 'Company Users',
				DEPARTMENTS : 'Departments',
				LOCATIONS : 'Locations',
				GROUPS : 'Groups',
				MY_PROFILE : 'My Profile',
				DAY21_BLUEPRINT : '21 Day Blueprint'
			}).translations('de', {
				DASHBOARD : 'Armaturenbrett',
				COMPANY_LIST: 'Unternehmensliste',
				MANAGE_RESOURCES : 'Ressourcen verwalten',
				RESOURCES : 'Ressourcen',
				COMPANY_PROFILE : 'Firmenprofil',
				COMPANY_USERS : 'Unternehmen Benutzer',
				DEPARTMENTS : 'Abteilungen',
				LOCATIONS : 'Locations',
				GROUPS : 'Gruppen',
				MY_PROFILE : 'Mein Profil',
				DAY21_BLUEPRINT : '21 Tag Entwurf'
			});*/
			$translateProvider.useSanitizeValueStrategy('escaped');
			$translateProvider.preferredLanguage('en');
			$translateProvider.useLocalStorage();
//			$translateProvider.useCookieStorage();
			/*
			 * var $injector = angular.injector([ 'pure-hydration-ng.services'
			 * ]); var authService = $injector.get('AuthService');
			 * 
			 * if (authService.getStatus()) { // $window.location.href =
			 * '#/dashboard'; }
			 */

			IdleProvider.idle(120);
			IdleProvider.timeout(5);
			KeepaliveProvider.interval(10);

			$routeProvider.when('/', {
				redirectTo : '/login'
			}).when('/login', {
				controller : 'LoginController',
				templateUrl : 'app/login/login.html'
			}).when('/dashboard/:dashboardType', {
				controller : 'DashboardRouteController',
				templateUrl : 'app/common/placeholder.html',
				resolve : {
					auth : function resolveAuthentication(AuthResolver) {
						return AuthResolver.resolve();
					}
				}
			}).when('/List/:entityType', {
				controller : 'ListRouteController',
				templateUrl : 'app/common/placeholder.html',
				resolve : {
					auth : function resolveAuthentication(AuthResolver) {
						return AuthResolver.resolve();
					}
				}

			}).when('/Detail/:entityType/:id?', {
				controller : 'DetailRouteController',
				templateUrl : 'app/common/placeholder.html',
				resolve : {
					auth : function resolveAuthentication(AuthResolver) {
						return AuthResolver.resolve();
					}
				}
			}).when('/unitSettings', {
				controller : 'UnitSettingController',
				templateUrl : 'app/common/unitsetting.html',
				resolve : {
					auth : function resolveAuthentication(AuthResolver) {
						return AuthResolver.resolve();
					}
				}
			}).when('/companyProfile', {
				redirectTo : '/Detail/company'
			}).when('/myProfile', {
				redirectTo : '/Detail/user'
			}).otherwise({
				redirectTo : '/'
			});

		} ]);
pureHydrationApp.factory('AuthResolver', function($q, $rootScope, $window) {
	return {
		resolve : function() {
			var deferred = $q.defer();
			var unwatch = $rootScope.$watch('loginBean.currentUser', function(
					currentUser) {
				if (angular.isDefined($rootScope.loginBean.currentUser)) {
					if ($rootScope.loginBean.currentUser) {
						deferred.resolve($rootScope.loginBean.currentUser);
					} else {
						deferred.reject();
						$window.location.href = '#/login';
					}
					unwatch();
				}
			});
			return deferred.promise;
		}
	};
})