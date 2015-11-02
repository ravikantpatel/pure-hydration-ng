/**
 * Company Service
 */

pureHydrationServices.factory('ProductService', function($http,
		PATHS) {
	
	var productDetails;
	productDetails = [ {
		productId : 101,
		productName : 'Prod101',
		description : 'Prod id is 101',
		image : '<img src="'+PATHS.appImages+'test.jpg'+'" width="100"/>',
		link : '<a href="#/productDetail/101">Edit</a>'
	}, {
		productId : 102,
		productName : 'Prod102',
		description : 'Prod id is 102',
		image : '<img src="'+PATHS.appImages+'test.jpg'+'" width="100"/>',
		link : '<a href="#/productDetail/102">Edit</a>'
	}, {
		productId : 103,
		productName : 'Prod103',
		description : 'Prod id is 103',
		image : '<img src="'+PATHS.appImages+'test.jpg'+'" width="100"/>',
		link : '<a href="#/productDetail/103">Edit</a>'
	}, {
		productId : 104,
		productName : 'Prod104',
		description : 'Prod id is 104',
		image : '<img src="'+PATHS.appImages+'test.jpg'+'" width="100"/>',
		link : '<a href="#/productDetail/104">Edit</a>'
	} ];

	return {
		getProductDetails : function() {
			return productDetails;
		},
		getProductDetailById : function(productId) {

			for (var i = 0; i < productDetails.length; i++) {
				if (productId == companyDetails[i].productId) {
					return productDetails[i];
				}
			}
			return null;
		}
	};
});