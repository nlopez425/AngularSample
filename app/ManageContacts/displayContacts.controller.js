(function(){

	"use strict";

	angular.module('myApp.manageContacts').controller('DisplayContactsCTRL',DisplayContactsCTRL);


	DisplayContactsCTRL.$inject = ['ManageContacts'];

	function DisplayContactsCTRL (ManageContacts){

		var _this = this;
		
		_this.list = ManageContacts.getContacts();
		_this.subList;

		_this.getSubList = function(key){
			_this.subList = _this.list[key];
			console.log(_this.subList)
			return JSON.parse(_this.subList);


		}
		console.log(_this.list);
		
	}


}())