/**
 * Created by dp-ptcstd-10 on 9/14/2016.
 */

/*define(["common"]  - common - название js файла*/
define(["commonMy"],function(common) {
    return {
        hi:function() {
            return common.first();
        }
    };
});