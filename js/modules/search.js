define('search', ['db'], function(db){
    var searchInput = document.createElement("input");

    function initSearchButton(element){
    	var element = element;
    	element.parentElement.insertBefore(searchInput, element);
    }

    return {
    	initSearchButton : initSearchButton
    }
});