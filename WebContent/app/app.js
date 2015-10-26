/**
 * Main app file
 */

'use strict';
pureHydrationApp.run(function($interval,$window) {
	$interval(function() {
		delete localStorage['loggedIn'];
		delete localStorage['currentUser'];
		delete localStorage['userRole'];
		delete localStorage['loginTimeStamp'];
		$window.location.href = '/login';
	}, 1000 * 60 * 2);
});
/*
 * pureHydrationApp.directive('myDirective', function() { return { restrict :
 * 'E', replace: true, templateUrl: "pages/common/header.html" } });
 */

pureHydrationApp.config([ '$routeProvider', function($routeProvider) {

	/*
	 * var $injector = angular.injector([ 'pure-hydration-ng.services' ]); var
	 * authService = $injector.get('AuthService');
	 * 
	 * if (authService.getStatus()) { // $window.location.href = '#/dashboard'; }
	 */
	$routeProvider.when('/', {
		redirectTo : '/login'
	}).when('/login', {
		controller : 'LoginController',
		templateUrl : 'app/login/login.html'
	}).when('/dashboard', {
		controller : 'DashboardController',
		templateUrl : 'app/superadmin/dashboard.html'
	}).when('/companyList', {
		controller : 'CompanyListController',
		templateUrl : 'app/company/list.html'
	}).when('/companyDetail', {
		controller : 'CompanyDetailController',
		templateUrl : 'app/company/detail.html'
	}).otherwise({
		redirectTo : '/'
	});
} ]);