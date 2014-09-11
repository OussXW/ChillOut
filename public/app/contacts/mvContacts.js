angular.module('app').factory('mvContacts',function($resource)
{
    var ContactsResource=$resource('/api/contacts/:_id',{_id:"@id"},{
        update:{method:'PUT',isArray:false}
    });
    return ContactsResource;
});