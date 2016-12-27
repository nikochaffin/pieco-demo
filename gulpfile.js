var gulp = require('gulp');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('compile-sass', function() {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: 'last 2 versions' }))
    .pipe(rename(function(path) {
      path.extname = ".css"
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
    .pipe(cleanCSS())
    .pipe(rename(function(path) {
      path.basename += ".min";
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch('css/**/*.scss', ['compile-sass']);
});

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: '.',
      index: 'index.html',
    },
    online: true,
  });

  gulp.watch('./app/**/*.js').on('change', browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

// gulp.task('serve-gh-pages', ['watch'], function() {
//   browserSync.init({
//     server: {
//       baseDir: '..',
//       index: 'automate-forms/index.html',
//     }
//   });
//
//   gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
//   gulp.watch('./*.html').on('change', browserSync.reload);
// });

gulp.task('default', ['serve']);
