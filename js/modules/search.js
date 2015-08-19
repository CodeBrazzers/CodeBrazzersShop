define('search', ['db'], function(db){
    Search = {};

    Search.isActive = false;

    Search.init = function(searchButton, searchField) {
    	var self = this,
    		activeBoxes = [searchButton, searchField];

    	self.button = searchButton;
    	self.field  = searchField;

    	document.body.addEventListener("click", function (event) {
  			
  			if (event.target == self.button || 
  				event.target.parentNode == self.button) {
  				self.toggle();
  			}

  			// if (!isDescendantOrSelf(event.target, activeBoxes)) {
  			// 	self.close();
  			// }

    	});

    }
    /*
		Incorrect return FIX!!!!
    */
    function isDescendantOrSelf(child,possibleParents) {
    	var currentElement = child;

    	possibleParents.forEach( function (item, i) {

    		while (currentElement != document.body) {

    			if (currentElement == item) {
    				
    				return true;
    			}

    			currentElement = currentElement.parentNode;
    		}
    	});

    	return false;
    }

    Search.close = function() {
    	this.field.classList.remove("search-active");
    }

    Search.toggle = function() {
    	if(this.isActive) {
    		this.field.classList.toggle("search-active");
    		this.isActive = false;
    	} else {
    		this.field.focus();
    		this.field.classList.toggle("search-active");
    		this.isActive = true;
    	}
    }

    return Search;
});