angular.module('app').factory('mvAbout',function($resource)
{
    var AboutResource=$resource('/api/about/:_id',{_id:"@id"},{
        update:{method:'PUT',isArray:false}
    });
    return AboutResource;
});