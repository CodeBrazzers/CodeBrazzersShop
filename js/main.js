requirejs.config({
    paths: {
        "exampleModule" : "modules/exampleModule"
    }
});

require(
    ['exampleModule'],
    function(exModule){
        // document.getElementsByTagName("body")[0].innerHTML = exModule.foo;
    }
);