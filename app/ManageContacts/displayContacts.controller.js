(function(){

	"use strict";

	angular.module('myApp.manageContacts').controller('DisplayContactsCTRL',DisplayContactsCTRL);


	DisplayContactsCTRL.$inject = ['$scope','ManageContacts'];

	function DisplayContactsCTRL ($scope,ManageContacts){

		var _this = this;
		
		_this.list = ManageContacts.getContacts();
		_this.subList;
		_this.filterBy = {
			firstName:"A",
			lastName:"A"
		};

		
		$scope.setFilter_lastName = function(letter){
			_this.filterBy.lastName = letter;
			$scope.$apply();
			
		}

		$scope.setFilter_firstName = function(letter){
			_this.filterBy.firstName = letter;
			$scope.$apply();
		}
		

		//append to scope
		
		
		
	}


}())