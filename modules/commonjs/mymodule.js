/**
 * Created by dp-ptcstd-10 on 9/14/2016.
 */
var lib = require("./lib.js");

function myModule() {
    this.hello = function() {
        return 'hello!!!';
    }

    this.goodbye = function() {
        return 'goodbye!';
    }
}

module.exports = myModule;