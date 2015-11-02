/**
 * Company Service
 */

pureHydrationServices
		.factory(
				'UserService',
				function($http) {
					var userDetails;
					userDetails = [
							{
								userId : 1,
								title : 'Mr',
								firstName : 'Ravikant',
								lastName : 'Patel',
								department : 'IT',
								emailId : 'rk14.patel@gmail.com',
								type : 'super_admin',
								status : 'Active',
								link : '<a href="#/editCompany:105" onclick="this.parentNode.submit()">Edit</a>'
							},
							{
								userId : 2,
								title : 'Mr',
								firstName : 'Arun',
								lastName : 'Patel',
								department : 'IT',
								emailId : 'rk14.patel@gmail.com',
								type : 'super_admin',
								status : 'Active',
								link : '<a href="#/editCompany:105" onclick="this.parentNode.submit()">Edit</a>'
							},
							{
								userId : 3,
								title : 'Mr',
								firstName : 'Vipul',
								lastName : 'Vaghela',
								department : 'IT',
								emailId : 'rk14.patel@gmail.com',
								type : 'super_admin',
								status : 'Active',
								link : '<a href="#/editCompany:105" onclick="this.parentNode.submit()">Edit</a>'
							} ];

					return {
						getUserDetails : function() {
							return userDetails;
						},
						getUserDetailById : function(userId) {

							for (var i = 0; i < userDetails.length; i++) {
								if (userId == userDetails[i].userId) {
									return userDetails[i];
								}
							}
							return null;
						}
					};
				});