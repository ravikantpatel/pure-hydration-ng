/**
 * Group List Controller
 */

pureHydrationAppControllers.controller('GroupListController', [ '$scope',
		'AuthService', '$window', 'UNITS', 'GroupService',

		function($scope, AuthService, $window, UNITS, GroupService) {

			$scope.groupDetails = GroupService.getGroupDetails();
			$scope.pagePath = 'Groups';
			$scope.exportToXLS = function () {
		        alasql('SELECT * INTO XLSX("groupList.xlsx",{headers:true}) FROM ?',[$scope.groupDetails]);
		    };
			
			$scope.config = {
				itemsPerPage : 5,
				fillLastPage : true
			}
		} ]);
