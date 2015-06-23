var gulp         = require('gulp');
var rework       = require('gulp-rework');
var rename       = require('gulp-rename');
// rework-suit includes multiple rework plugins.
var suit         = require('rework-suit');
var autoprefixer = require('gulp-autoprefixer');
var config       = require('../util/config');
var handleError  = require('../util/handleError');
// Example of using another rework plugin that isn't part of rework-suit.
var color = require('rework-plugin-colors');

gulp.task('suit', function() {

  return gulp.src(config.paths.mainFile)
    .pipe(rework(suit(), color(), {sourcemap:true}).on('error', handleError))
    .pipe(rework().on('error', handleError))
    .pipe(rename('components.css'))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.paths.componentsDest))

});
