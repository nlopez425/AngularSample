(function(){

    "use strict";

    angular.module('myApp.manageContacts').filter("nameFilter",nameFilter);

    function nameFilter(){

        return function(contactObjs, searchObj){
            var filtered = [];

            angular.forEach(contactObjs,function(contact){
                
                if(contact.firstName.charAt(0).toLowerCase() == searchObj.firstName.toLowerCase() && contact.lastName.charAt(0).toLowerCase() == searchObj.lastName.toLowerCase()){

                    filtered.push(contact);

                }

            });

            return filtered;

        }

    }

}());