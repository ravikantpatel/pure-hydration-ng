/**
 * Main app file and configurations
 */

'use strict';
pureHydrationApp.run([ 'Idle', function(Idle) {
	Idle.watch();
} ]);
/*
 * pureHydrationApp.directive('myDirective', function() { return { restrict :
 * 'E', replace: true, templateUrl: "pages/common/header.html" } });
 */

pureHydrationApp.config([ '$routeProvider', 'KeepaliveProvider',
		'IdleProvider',
		function($routeProvider, KeepaliveProvider, IdleProvider) {

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
			}).when('/companyProfile', {
				redirectTo : '/Detail/company'
			}).otherwise({
				redirectTo : '/'
			});

		} ]);
pureHydrationApp
		.factory(
				'AuthResolver',
				function($q, $rootScope, $window) {
					return {
						resolve : function() {
							var deferred = $q.defer();
							var unwatch = $rootScope
									.$watch(
											'loginBean.currentUser',
											function(currentUser) {
												if (angular
														.isDefined($rootScope.loginBean.currentUser)) {
													if ($rootScope.loginBean.currentUser) {
														deferred
																.resolve($rootScope.loginBean.currentUser);
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