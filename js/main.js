requirejs.config({
    paths: {
        "exampleModule" : "modules/exampleModule",
        "db" : "modules/db",
        "search" : "modules/search"
    }
});

require(
    ['search'],
    function(Search){
        var searchButton = document.getElementById("searchButton"),
			searchField  = document.getElementById("searchField");

        Search.init(searchButton,searchField);
    }
);