// Define gulp
var gulp = require('gulp');

// Define other plugins
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Set up the sass task
gulp.task('sass', function() {
  return gulp.src('styles/screen.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(reload({ stream:true }));
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch('styles/*.scss', ['sass']);
});

gulp.task('default', function() {
  // here be dragons
});
