(function(){

	"use strict";

	angular.module('myApp.manageContacts').directive("filterSelector",filterSelector);

	function filterSelector(){
		
		var directive = {
	        link: link,
	        templateUrl: 'app/ManageContacts/filter_list.html',
	        restrict: 'E'
	    };

	    return directive;

	    function link(scope, element, attrs) {
	      	var $selector;
	    	element.click(function(e){
	    		
	    		if($(e.target).hasClass("selector-marker")){
	    			
	    			$("li.selector-marker").removeClass("active");

	    			$selector = $(e.target);
	    			if(!$selector.hasClass("active")){

	    				$selector.addClass("active");
	    			}
	    			
	    		}else{


	    			if($selector != undefined){
	    				
	    				$selector.animate({
	    					"top":$(e.target).position().top + "px"
	    				},250) ;

	    				switch($selector.attr("id")){
	    					case "last_name":
	    						scope.setFilter_lastName($(e.target).text());
	    						console.log($(e.target).text());
	    						break;

	    					case "first_name":
	    						scope.setFilter_firstName($(e.target).text());
	    						console.log($(e.target).text());
	    						break;
	    				}

	    			}


	    		}


	    	});

	    }

		
	}

}());