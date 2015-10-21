/**
 * Main app file
 */

'use strict';
pureHydrationApp.run(function() {

});
/*
 * pureHydrationApp.directive('myDirective', function() { return { restrict :
 * 'E', replace: true, templateUrl: "pages/common/header.html" } });
 */

pureHydrationApp.config([ '$routeProvider', function($routeProvider) {

	/*var $injector = angular.injector([ 'pure-hydration-ng.services' ]);
	var authService = $injector.get('AuthService');
	
	if (authService.getStatus()) {
		// $window.location.href = '#/dashboard';
	}*/
	$routeProvider.when('/', {
		redirectTo : '/login'
	}).when('/login', {
		controller : 'LoginController',
		templateUrl : 'pages/login/login.html'
	}).when('/dashboard', {
		controller : 'DashboardController',
		templateUrl : 'pages/superadmin/dashboard.html'
	}).when('/companyList', {
		controller : 'CompanyListController',
		templateUrl : 'pages/company/list.html'
	}).when('/companyList', {
		controller : 'CompanyListController',
		templateUrl : 'pages/company/list.html'
	}).otherwise({
		redirectTo : '/'
	});
} ]);