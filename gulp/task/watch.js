var gulp  = require('gulp');
var paths = require('../util/config').paths;
var connect = require('gulp-connect');

gulp.task('watch', function() {
  connect.server({
    root: './',
    livereload: true
  });
  gulp.watch(paths.componentsSrc, ['suit', 'html']);
});
