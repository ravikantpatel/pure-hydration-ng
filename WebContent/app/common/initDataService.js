/**
 * Init Data Service
 */

pureHydrationServices.factory('InitDataService', function($http,
		CompanyService, DepartmentService) {

	return {
		initAppData : function() {
			// Init Company List
			CompanyService.initCompanyList();

			// Init Department List
			DepartmentService.initDepartmentList();
		}
	};
});
