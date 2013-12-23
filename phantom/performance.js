var page = require('webpage').create();
var fs = require('fs');
var sys = require('system');
var jsfile = phantom.args[0];

page.onConsoleMessage = function (message) {
    console.log("Test console: " + message);
};

if( fs.exists(jsfile) ) {
  page.injectJs("resources/public/bower_components/pixi/bin/pixi.js")
  if( !page.injectJs(jsfile) )
    throw new Error("Failed to inject " + jsfile);
}

page.evaluate(function() {
  asteroids.performance_checks.set_print_fn_BANG_(function(x){console.log(x);});
  asteroids.performance_checks.run_performance_check();
});

phantom.exit(0);
