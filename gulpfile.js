/**
 * Define dependencies.
 */

var gulp = require('gulp'),
    deploy = require('gulp-gh-pages'),
    sass = require('gulp-ruby-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

/**
 * Define the tasks.
 */

gulp.task('default', function() {
    gulp.src([
            'source/index.html',
            'source/styles/screen.css'
        ])
        .pipe(gulp.dest('build'));
});

gulp.task('deploy', function() {
    return gulp.src('build/**/*')
        .pipe(deploy());
});
