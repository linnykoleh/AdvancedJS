/**
 * Created by dp-ptcstd-10 on 9/14/2016.
 */
// grab our gulp packages
// файл для конфигурации gulp
var gulp  = require('gulp'),
    concat = require('gulp-concat');

gulp.task('build-js', function() {
    return gulp.src('src/**/*.js')      /* найди любые файлы с расширением js*/
        .pipe(concat('bundle.js'))      /* перенапрявь в файл bundle.js*/
        .pipe(gulp.dest('.'));          /* и перенеси в текущюю папку*/
});