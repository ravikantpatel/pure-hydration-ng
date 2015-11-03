/**
 * User Service
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
								emailId : 'ravikant.patel@spec-india.com',
								type : 'super_admin',
								status : 'Active',
								companyId : 105,
								link : '<a href="#/editCompany:105" onclick="this.parentNode.submit()">Edit</a>'
							},
							{
								userId : 2,
								title : 'Mr',
								firstName : 'Arun',
								lastName : 'Patel',
								department : 'IT',
								emailId : 'arun.patel@spec-india.com',
								type : 'company_admin',
								status : 'Active',
								companyId : 105,
								link : '<a href="#/editCompany:105" onclick="this.parentNode.submit()">Edit</a>'
							},
							{
								userId : 3,
								title : 'Mr',
								firstName : 'Vipul',
								lastName : 'Vaghela',
								department : 'IT',
								emailId : 'vipul.vaghela@spec-india.com',
								type : 'super_admin',
								status : 'Active',
								companyId : 105,
								link : '<a href="#/editCompany:105" onclick="this.parentNode.submit()">Edit</a>'
							},
							{
								userId : 4,
								title : 'Mr',
								firstName : 'Parth',
								lastName : 'Patel',
								department : 'IT',
								emailId : 'parth.patel@spec-india.com',
								type : 'company_user',
								status : 'Active',
								companyId : 105,
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
						},
						getUserDetailByCompanyId : function(companyId) {
							var res = alasql(
									'SELECT * FROM ? WHERE companyId = ?', [
											userDetails, parseInt(companyId) ]);
							console.log('users::'+res);
							return res;

						}
					};
				});