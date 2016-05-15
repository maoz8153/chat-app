var gulp = require('gulp');
var config = require('./gulp-config.js')();
var $ = require('gulp-load-plugins')();
var pathScripts =  'public/';


gulp.task('inject', function () {
    var options = config.getInjectDep();
    var wiredep = require('wiredep').stream;

    return gulp
                .src(config.indexRead)
                .pipe(wiredep(options))
                .pipe($.inject(gulp.src(config.js), {ignorePath: pathScripts, addRootSlash: false}))
                .pipe(gulp.dest(config.indexFolder));
});
