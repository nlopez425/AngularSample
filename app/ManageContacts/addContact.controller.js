(function(){

	"use strict";

	angular.module('myApp.manageContacts').controller('AddContactCTRL',AddContactCTRL);


	AddContactCTRL.$inject = ['ManageContacts'];

	function AddContactCTRL (ManageContacts){

		var _this = this;
		_this.firstName;
		_this.lastName;

		_this.addContactToMemory = function(fname, lname){
			ManageContacts.addContact(fname,lname);
		}
	}


}())