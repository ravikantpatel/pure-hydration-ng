/**
 * Department Service
 */

pureHydrationServices.factory('DepartmentService', function($http, PATHS) {

	var departmentDetails = [];
	var counter;

	return {
		initDepartmentList : function() {
			counter = 1;
			department = {
				departmentId : 0,
				departmentName : 'department Name',
				description : 'description',
				edit : ''
			};
			department.departmentId = counter++;
			department.edit = '<a href="#/Detail/department/'
					+ department.departmentId + '" >Edit</a>';
			departmentDetails.push(department);

			department = {
				departmentId : 4002,
				departmentName : 'department Name',
				description : 'description',
				edit : ''
			};
			department.departmentId = counter++;
			department.edit = '<a href="#/Detail/department/'
					+ department.departmentId + '" >Edit</a>';
			departmentDetails.push(department);

			department = {
				departmentId : 0,
				departmentName : 'department Name',
				description : 'description',
				edit : ''
			};
			department.departmentId = counter++;
			department.edit = '<a href="#/Detail/department/'
					+ department.departmentId + '" >Edit</a>';
			departmentDetails.push(department);

			department = {
				departmentId : 0,
				departmentName : 'department Name',
				description : 'description',
				edit : ''
			};
			department.departmentId = counter++;
			department.edit = '<a href="#/Detail/department/'
					+ department.departmentId + '" >Edit</a>';
			departmentDetails.push(department);
		},
		getDepartmentDetails : function() {
			return departmentDetails;
		},
		getDepartmentDetailById : function(departmentId) {

			var res = alasql('SELECT * FROM ? WHERE departmentId = ?', [
					departmentDetails, parseInt(departmentId) ]);
			return res;
		}
	};
});