var spawn = require('child_process').spawn;
var gulp = require('gulp');

gulp.task( 'viz-reference', function () {
  gulp    = spawn('gulp', ['reference'], {cwd: './bower_components/backstopjs'});

  gulp.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });
});

gulp.task( 'viz-test', function () {
  gulp    = spawn('gulp', ['test'], {cwd: './bower_components/backstopjs'});

  gulp.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });
});
