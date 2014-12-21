// Define gulp
var gulp = require('gulp');

// Define other plugins
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Create an object to define the paths we need
var paths = {
 html: 'app/index.html',
 build: 'build'
};

// Setup the default gulp task
gulp.task('default', function(){
 gulp.src(paths.html)
 .pipe(gulp.dest(paths.build));
});
