module.exports = {
    entry: "./welcome",  /*  Точка входа  */
    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    watch: true,  /*  Следит за изменениями  */

    devtool: 'source-map'  /* строить мапу для исходного кода, можно видеть файлы по отдельности для отладки*/
}
