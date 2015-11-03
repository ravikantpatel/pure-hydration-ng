/**
 * Company Service
 */

pureHydrationServices.factory('DocumentService', function($http,
		PATHS) {
	
	var documentDetails;
	documentDetails = [ {
		documentId : 1001,
		documentName : 'Doc01',
		description : 'Document id is 1001',
		document : '',
		edit : '<a href="#/Detail/documents/1001" >Edit</a>'
	}, {
		documentId : 1002,
		documentName : 'Doc02',
		description : 'Document id is 1002',
		document : '',
		edit : '<a href="#/Detail/documents/1002" >Edit</a>'
	}, {
		documentId : 1003,
		documentName : 'Doc03',
		description : 'Document id is 1003',
		document : '',
		edit : '<a href="#/Detail/documents/1003" >Edit</a>'
	}, {
		documentId : 1004,
		documentName : 'Doc04',
		description : 'Document id is 1004',
		document : '',
		edit : '<a href="#/Detail/documents/1004" >Edit</a>'
	} ];

	return {
		getDocumentDetails : function() {
			return documentDetails;
		},
		getDocumentDetailById : function(documentId) {


			var res = alasql('SELECT * FROM ? WHERE documentId = ?', [ documentDetails, parseInt(documentId)]);
			return res[0];
		}
	};
});
