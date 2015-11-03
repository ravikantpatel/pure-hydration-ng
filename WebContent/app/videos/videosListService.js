/**
 * Video Service
 */

pureHydrationServices.factory('VideosService', function($http,
		PATHS) {
	
	var videosDetails;
	videosDetails = [ {
		videoId : 3001,
		title : 'Vdo01',
		description : 'Video id is 3001',
		document : '',
		link : '',
		edit : '<a href="#/Detail/videos/3001" >Edit</a>'
	}, {
		videoId : 3002,
		title : 'Vdo02',
		description : 'Video id is 3002',
		document : '',
		link : '',
		edit : '<a href="#/Detail/videos/3002" >Edit</a>'
	}, {
		videoId : 3003,
		title : 'Vdo03',
		description : 'Video id is 3003',
		document : '',
		link : '',
		edit : '<a href="#/Detail/videos/3003" >Edit</a>'
	}, {
		videoId : 3004,
		title : 'Vdo04',
		description : 'Video id is 3004',
		document : '',
		link : '',
		edit : '<a href="#/Detail/videos/3004" >Edit</a>'
	} ];

	return {
		getVideosDetails : function() {
			return videosDetails;
		},
		getVideosDetailById : function(videoId) {

			for (var i = 0; i < videosDetails.length; i++) {
				if (videoId == videosDetails[i].videoId) {
					return videosDetails[i];
				}
			}
			return null;
		}
	};
});