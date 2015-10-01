(function(){

	"use strict";

	angular.module('myApp.manageContacts').factory("ManageContacts",ManageContacts);

	function ManageContacts(){

		var contactLibrary = {};

		function addContactHash(fname,lname){

			var firstLetterLastName = lname[0];
			var firstLetterFirstName = fname[0];

			var person = {
				firstName:fname,
				lastName:lname
			}
			
			if(firstLetterLastName in contactLibrary){

				if(firstLetterFirstName in contactLibrary[firstLetterLastName]){
					contactLibrary[firstLetterLastName][firstLetterFirstName].push(person);
				}else{
					contactLibrary[firstLetterLastName][firstLetterFirstName] = [];
					contactLibrary[firstLetterLastName][firstLetterFirstName].push(person);
				}
				

			}else{

				contactLibrary[firstLetterLastName] = {};
				contactLibrary[firstLetterLastName][firstLetterFirstName] = [];
				contactLibrary[firstLetterLastName][firstLetterFirstName].push(person);

			}

			console.log(contactLibrary);

		}

		return {
			addContact:function(fname,lname){
				addContactHash(fname,lname);
			},
			getContacts:function(){
				return contactLibrary;
			}
		}


	}


}())