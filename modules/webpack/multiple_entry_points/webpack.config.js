/**
 * Created by dp-ptcstd-10 on 9/14/2016.
 */
module.exports = {
    entry: {
        about: "./about.js",     /*точка входа*/
        welcome: "./welcome.js"  /*точка входа*/
    },
    output: {
        path: "public",
        filename: "[name].js"
    },
    watch: true,
    devtool: 'source-map'
}