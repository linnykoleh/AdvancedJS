/**
 * Created by dp-ptcstd-10 on 9/14/2016.
 */
var lib = require("./lib.js");

console.log("hello from welcome");
lib();

require(["./async"], function(async) {
    console.log("async was loaded");
    async();
});

console.log("was async loaded?");
