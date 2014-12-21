// Define gulp
var gulp = require('gulp');

// Define other plugins
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Setup the default gulp task
gulp.task('default', function() {
    gulp.src([
            'source/index.html',
            'source/styles/screen.css'
        ])
        .pipe(gulp.dest('build'));
});
