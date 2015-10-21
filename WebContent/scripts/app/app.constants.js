/**
 * The file will be used to maintain the Application constants & Configurations
 * throughout the application i.e. modules, dependency injections, services and
 * constants
 */

var pureHydrationApp = angular.module('pure-hydration-ng', [ 'ngRoute',
		'ngStorage', 'pure-hydration-ng.services',
		'pure-hydration-ng.controllers', 'pure-hydration-ng.config' ]);
var pureHydrationServices = angular.module('pure-hydration-ng.services', [
		'ngRoute', 'ngStorage' ]);
var pureHydrationAppControllers = angular.module(
		'pure-hydration-ng.controllers', [ 'ngRoute', 'ngStorage',
				'pure-hydration-ng.services', 'pure-hydration-ng.config' ]);
var pureHydrationAppConfig = angular.module('pure-hydration-ng.config', [])

pureHydrationAppConfig.constant('appImages', 'resources/images/');
pureHydrationAppConfig.constant('USER_ROLES', {
	superAdminRole : 'SUPER_ADMIN',
	companyAdminRole : 'COMPANY_ADMIN',
	companyUserRole : 'COMPANY_USER'
});

pureHydrationAppConfig.constant('UNITS', {
	liquidUnit : 'us-oz'
});