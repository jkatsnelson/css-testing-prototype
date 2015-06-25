var spawn = require('child_process').spawn;
var gulp = require('gulp');

gulp.task( 'viz-reference', function () {
  gulp    = spawn('gulp', ['reference'], {cwd: './node_modules/backstopjs'});

  gulp.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });
});

gulp.task( 'viz-test', function () {
  gulp    = spawn('gulp', ['test'], {cwd: './node_modules/backstopjs'});

  gulp.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });
});
