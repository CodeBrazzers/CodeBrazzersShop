define('search', ['db'], function(db){
    Search = {};

    Search.isActive = false;

    Search.init = function(searchButton, searchField) {
    	var self = this;

    	self.button = searchButton;
    	self.field  = searchField;
    	
    	self.button.addEventListener("click", function () {
    		self.toggle();
    		console.log(self.isActive);
    	});
    }

    Search.toggle = function () {

    	if (this.isActive) {
    		this.field.style.width = '0px';
    		this.isActive = false; 
    	} else {
    		this.field.style.width = '150px';
    		this.isActive = true;
    	}
    }

    return Search;
});