/**
 * The file will be used to maintain the Application constants & Configurations
 * throughout the application i.e. modules, dependency injections, services and
 * constants
 */

var pureHydrationApp = angular.module('pure-hydration-ng', [ 'ngRoute',
		'ngStorage', 'pure-hydration-ng.services',
		'pure-hydration-ng.controllers', 'pure-hydration-ng.config',
		'pure-hydration-ng.directives', 'ngIdle' ]);
var pureHydrationServices = angular.module('pure-hydration-ng.services', [
		'ngRoute', 'ngStorage', 'pure-hydration-ng.config' ]);
var pureHydrationAppControllers = angular.module(
		'pure-hydration-ng.controllers', [ 'ngRoute', 'ngStorage',
				'pure-hydration-ng.services', 'pure-hydration-ng.config',
				'chart.js' ]);
var pureHydrationAppDirectives = angular.module('pure-hydration-ng.directives',
		[ 'ngRoute', 'ngStorage', 'pure-hydration-ng.services',
				'pure-hydration-ng.config' ]);
var pureHydrationAppConfig = angular.module('pure-hydration-ng.config', [])

pureHydrationAppConfig.constant('PATHS', {
	appImages : 'assets/images/'
});
pureHydrationAppConfig.constant('USER_ROLES', {
	SUPER_ADMIN : {
		role : 'SUPER_ADMIN',
		dashboardType : 'superAdmin'
	},
	COMPANY_ADMIN : {
		role : 'COMPANY_ADMIN',
		dashboardType : 'companyAdmin'
	},
	COMPANY_USER : {
		role : 'COMPANY_USER',
		dashboardType : 'companyUser'
	}
});

pureHydrationAppConfig.constant('UNITS', {
	liquidUnit : 'us-oz',
	liquid_ml : 'ml',
	liquid_us_oz : 'liquid_us_oz',
	liquid_uk_oz : 'liquid_uk_oz'
});
pureHydrationAppConfig.constant('serverBaseURL',
		'http://127.0.0.1:3000/pureHydration/');