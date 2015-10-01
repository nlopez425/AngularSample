(function(){

	"use strict";

	angular.module("controllerMod",[]).controller("MainCtrl",MainCtrl);

	function MainCtrl(){
		this.message = "Test Contact Manager";
	}

}())

