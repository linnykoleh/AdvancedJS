/**
 * Created by dp-ptcstd-10 on 9/14/2016.
 */
var myModule = require('./mymodule');

var myModuleInstance = new myModule();
window.hi = function() {
    return myModuleInstance.hello();
}


