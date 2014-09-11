angular.module('app').factory('mvSpotify',function($resource)
{
    var SpotifyResource=$resource('/api/spotify/:_id',{_id:"@id"},{
        update:{method:'PUT',isArray:false}
    });
    return SpotifyResource;
});