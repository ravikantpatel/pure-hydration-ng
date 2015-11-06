/**
 * Company Service
 */

pureHydrationServices.factory('CompanyService', function($http, PATHS,
		StateService) {
	var companyDetails = [];
	var counter;

	return {
		initCompanyList : function() {
			counter = 1;
			var company = {
				companyId : 0,
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
				countryId : 1,
				postalCode : '84425',
				contactNo : '21345225',
				website : 'www.motorola.us',
				emailId : 'admin@motorola.us',
				status : 'Active',
				companyLogoUrl : PATHS.appImages + 'test.jpg',
				link : ''
			};
			company.companyId = counter++;
			company.link = '<a href="#/Detail/company/' + company.companyId
					+ '" >Edit</a>'

			companyDetails.push(company);
			company = {
				companyId : 0,
				companyName : 'Samsung',
				users : 204,
				completedBluePrint : 190,
				waterConsumption : 12500,
				goalMet : 100,
				companySince : 2001,
				address1 : 'china street',
				address2 : 'mobile corner',
				city : 'Hongkong',
				stateId : 2,
				state : 'Hongkong',
				countryId : 5,

				postalCode : '15545',
				contactNo : '54654321',
				website : 'www.samsung.hk',
				emailId : 'admin@samsung.hk',
				status : 'Active',
				companyLogoUrl : PATHS.appImages + 'test.jpg',
				link : ''
			};
			company.companyId = counter++;
			company.link = '<a href="#/Detail/company/' + company.companyId
					+ '" >Edit</a>'

			companyDetails.push(company);

			company = {
				companyId : 0,
				companyName : 'Alphabet',
				users : 70,
				completedBluePrint : 70,
				waterConsumption : 1500,
				goalMet : 70,
				companySince : 2014,
				address1 : 'Google road',
				address2 : 'Google Building',
				city : 'Silicon Velly',
				stateId : 3,
				state : 'Silicon Velly',
				countryId : 1,
				postalCode : '414822',
				contactNo : '787585544',
				website : 'www.abcdefghijklmnopqrstuvwxyz.com',
				emailId : 'ceo@abcdefghijklmnopqrstuvwxyz.com',
				status : 'Active',
				companyLogoUrl : PATHS.appImages + 'test.jpg',
				link : ''
			};

			company.companyId = counter++;
			company.link = '<a href="#/Detail/company/' + company.companyId
					+ '" >Edit</a>'

			companyDetails.push(company);

			company = {
				companyId : 0,
				companyName : 'Micromax',
				users : 50,
				completedBluePrint : 45,
				waterConsumption : 1000,
				goalMet : 45,
				companySince : 2010,
				address1 : 'Micromax Building',
				address2 : '',
				city : 'Hydrabad',
				stateId : 4,
				state : 'Andrapradesh',
				countryId : 2,
				postalCode : '874155',
				contactNo : '9885548700',
				website : 'www.micromax.co.in',
				emailId : 'hr@micromax.co.in',
				status : 'Active',
				companyLogoUrl : PATHS.appImages + 'test.jpg',
				link : ''
			};
			company.companyId = counter++;
			company.link = '<a href="#/Detail/company/' + company.companyId
					+ '" >Edit</a>'

			companyDetails.push(company);
		},
		getCompanyDetails : function() {

			var res = alasql('SELECT * FROM ? ', [ companyDetails ]);
			return res;
			// return companyDetails; // normal way of returning object
		},
		getCompanyDetailById : function(companyId) {

			// var res = alasql('SELECT * FROM ? WHERE companyId = ?', [
			// companyDetails, companyId]);
			var res = alasql('SELECT * FROM ? WHERE companyId = ?', [
					companyDetails, parseInt(companyId) ]);
			// Normal way of finding matching object
			/*
			 * for (var i = 0; i < companyDetails.length; i++) { if (companyId ==
			 * companyDetails[i].companyId) { return companyDetails[i]; } }
			 */

			return res[0];
		},
		addUpdateCompany : function(company) {
			var existingCompany = false;
			var companyFoundAt;
			for (var i = 0; i < companyDetails.length; i++) {
				if (company.companyId == companyDetails[i].companyId) {
					existingCompany = true;
					companyFoundAt = i;
					break;
				}
			}
			if (existingCompany) {
				companyDetails.splice(companyFoundAt, 1);
				companyDetails.push(company);
				for (var i = 0; i < companyDetails.length; i++) {
					if (company.companyId == companyDetails[i].companyId) {
					}
				}
				
			} else {
				company.copanyId = counter++;
				company.link = '<a href="#/Detail/company/' + company.copanyId
						+ '" >Edit</a>';
				company.state = StateService
						.getStateDetailById(company.stateId).state;
				companyDetails.push(company);
				
			}
		}
	};
});
