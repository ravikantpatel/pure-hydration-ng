/**
 * Main app file
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
				templateUrl : 'app/common/placeholder.html'
			}).when('/List/:entityType', {
				controller : 'ListRouteController',
				templateUrl : 'app/common/placeholder.html'
			}).when('/companyList', {
				controller : 'CompanyListController',
				templateUrl : 'app/company/list.html'
			}).when('/companyDetail/:companyId', {
				controller : 'CompanyDetailController',
				templateUrl : 'app/company/detail.html'
			}).when('/Detail/:entityType/:id', {
				controller : 'DetailRouteController',
				templateUrl : 'app/common/placeholder.html'
			}).when('/resources', {
				controller : 'ResourcesController',
				templateUrl : 'app/resources/resources.html'
			}).when('/manageResources', {
				controller : 'ManageResourcesController',
				templateUrl : 'app/manageresources/manageresources.html'
			}).otherwise({
				redirectTo : '/'
			});

			

		} ]);