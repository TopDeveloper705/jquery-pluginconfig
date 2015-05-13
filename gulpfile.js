var path = require('path');

var gulp = require('gulp');

var clean   = require('gulp-clean');
var concat  = require('gulp-concat');
var jshint  = require('gulp-jshint');
var rename  = require('gulp-rename');
var uglify  = require('gulp-uglify');
var umd     = require('gulp-umd');
var qunit   = require('gulp-qunit');

gulp.task('clean', function () {
  return gulp.src('dist', { read: false })
    .pipe(clean());
});

gulp.task('lint', function() {
  return gulp.src('src/jquery-pluginconfig.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('build', ['lint', 'clean'], function() {
  return gulp.src('src/jquery-pluginconfig.js')
    .pipe(concat('jquery-pluginconfig.js'))
    .pipe(umd({
      exports: function() {
        return 'pluginConfig';
      },

      namespace: function() {
        return 'pluginConfig';
      },

      template: path.join(__dirname, '/src/umd-template.js')
    }))
    .pipe(gulp.dest('dist'))
    .pipe(rename('jquery-pluginconfig.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['build'], function() {
  return gulp.src(path.join(__dirname, '/test/test-runner.html'))
    .pipe(qunit());
});
