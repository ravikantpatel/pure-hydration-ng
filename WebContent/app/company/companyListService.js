/**
 * Company Service
 */

pureHydrationServices
		.factory(
				'CompanyService',
				function($http) {
					var companyDetails;
					companyDetails = [
							{
								companyId : 105,
								companyName : 'Motorola',
								users : 200,
								completedBluePrint : 170,
								waterConsumption : 10500,
								goalMet : 90,
								companySince : 2000,
								address1 : 'address1',
								address2 : 'address2',
								city : 'Wichita',
								stateId : 1,
								state : 'Wichita',
								country : {
									countryId : 1,
									country : 'USA'
								},
								postalCode : '84425',
								contactNo : '21345225',
								website : 'www.motorola.us',
								emailId : 'admin@motorola.us',
								status : 'Active',
								link : '<a href="#/Detail/company/105" >Edit</a>'
							},
							{
								companyId : 201,
								companyName : 'Samsung',
								users : 204,
								completedBluePrint : 190,
								waterConsumption : 12500,
								goalMet : 100,
								companySince : 2001,
								address1 : 'china street',
								address2 : 'mobile corner',
								city : 'Hongkong',
								state : {
									stateId : 2,
									state : 'Hongkong'
								},
								country : {
									countryId : 5,
									country : 'China'
								},
								postalCode : '15545',
								contactNo : '54654321',
								website : 'www.samsung.hk',
								emailId : 'admin@samsung.hk',
								status : 'Active',
								link : '<a href="#/Detail/company/201" >Edit</a>'
							},
							{
								companyId : 111,
								companyName : 'Alphabet',
								users : 70,
								completedBluePrint : 70,
								waterConsumption : 1500,
								goalMet : 70,
								companySince : 2014,
								address1 : 'Google road',
								address2 : 'Google Building',
								city : 'Silicon Velly',
								state : {
									stateId : 3,
									state : 'Silicon Velly'
								},
								country : {
									countryId : 1,
									country : 'USA'
								},
								postalCode : '414822',
								contactNo : '787585544',
								website : 'www.abcdefghijklmnopqrstuvwxyz.com',
								emailId : 'ceo@abcdefghijklmnopqrstuvwxyz.com',
								status : 'Active',
								link : '<a href="#/Detail/company/111" >Edit</a>'
							},
							{
								companyId : 150,
								companyName : 'Micromax',
								users : 50,
								completedBluePrint : 45,
								waterConsumption : 1000,
								goalMet : 45,
								companySince : 2010,
								address1 : 'Micromax Building',
								address2 : '',
								city : 'Hydrabad',								
								state : {
									stateId : 4,
									state : 'Andrapradesh'
								},
								country : {
									countryId : 2,
									country : 'India'
								},
								postalCode : '874155',
								contactNo : '9885548700',
								website : 'www.micromax.co.in',
								emailId : 'hr@micromax.co.in',
								status : 'Active',
								link : '<a href="#/Detail/company/150" >Edit</a>'
							} ];

					return {
						getCompanyDetails : function() {
							return companyDetails;
						},
						getCompanyDetailById : function(companyId) {
							
							for (var i = 0; i < companyDetails.length; i++) {
								if (companyId == companyDetails[i].companyId) {
									return companyDetails[i];
								}
							}
							return null;
						}
					};
				});