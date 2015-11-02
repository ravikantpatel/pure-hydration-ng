/**
 * Company Service
 */

pureHydrationServices
		.factory(
				'CountryService',
				function($http) {
					var countries;
					countries = [
							{
								countryId : 1,
								country : 'USA'
							},
							{
								countryId : 2,
								country : 'India'
							},
							{
								countryId : 3,
								country : 'Brazil'
							},
							{
								countryId : 4,
								country : 'Germany'
							},
							{
								countryId : 5,
								country : 'China'
							}];

					return {
						getCountries : function() {
							return countries;
						}
					};
				});