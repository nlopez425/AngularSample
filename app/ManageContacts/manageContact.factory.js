(function(){

	"use strict";

	angular.module('myApp.manageContacts').factory("ManageContacts",ManageContacts);

	function ManageContacts(){

		var contactLibrary = [];

		
		return {
			addContact:function(fname,lname){
				
				contactLibrary.push({firstName:fname,lastName:lname});

			},
			getContacts:function(){
				return contactLibrary;
			}
		}


	}


}())