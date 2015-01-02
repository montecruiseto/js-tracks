/*
 * Define our dependencies.
 */

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    del = require('del'),
    sass = require('gulp-ruby-sass'),
    handlebars = require('gulp-handlebars'),
    defineModule = require('gulp-define-module'),
    declare = require('gulp-declare'),
    deploy = require('gulp-gh-pages'),
    runSequence = require('run-sequence');


/*
 * Task to delete our 'build' folder before watching or building
 */

gulp.task('clean', function(cb) {
    del(['build'], cb);
});


/*
 * Task to compile our handlebars into javascript
 */


gulp.task('hbs', function() {
    return gulp.src('source/templates/*.hbs')
        .pipe(handlebars())
        .pipe(defineModule('plain'))
        .pipe(declare({
            namespace: 'template'
        }))
        .pipe(gulp.dest('build/js'));
});


/*
 * Task to compile our Sass files
 */

gulp.task('sass', function() {
    return sass('source/styles/mnml.scss')
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

/*
 * Task to build our Javascript
 */

gulp.task('js', function() {
    gulp.src('source/scripts/*.js')
        .pipe(gulp.dest('build/js'));
});

/*
 * Task to simply copy our static assets to the 'build' folder
 */
//**************** TODO - concatenate github fork css to main stylesheet

gulp.task('static', function() {
    gulp.src('source/index.html')
        .pipe(gulp.dest('build'));
    gulp.src(['source/styles/*.css'])
        .pipe(gulp.dest('build/css'));
    gulp.src('source/data/tracks.json')
        .pipe(gulp.dest('build/data'));
});


/*
 * Task to build our project to the 'build' folder
 */

gulp.task('build', ['clean'], function(cb) {
    runSequence(['sass', 'static', 'hbs', 'js'], cb);
});


/*
 * The default task (run 'gulp')
 */


gulp.task('default', ['watch'], function() {});

/*
 * Define our browserSync configuration.
 */

var config = {
    server: {
        baseDir: "./build",
    },
    browser: "google chrome canary"
};


/*
 * 1 - Task to start the server with our configuration settings
 * 2 - Watch all our assets & reload
 */

gulp.task('watch', ['build'], function() {
    browserSync(config);
    gulp.watch("source/styles/**/*.scss", ['sass']);
    gulp.watch("source/index.html", ['static', 'bs-reload']);
    gulp.watch("source/scripts/main.js", ['js', 'bs-reload']);
    gulp.watch("source/templates/*", ['hbs', 'bs-reload']);
});


/*
 * Task to reload all our browsers
 */

gulp.task('bs-reload', function() {
    browserSync.reload();
});


/*
 * Run a deploy to github pages (run 'gulp deploy')
 */

gulp.task('deploy', function() {
    return gulp.src(['build/**/*'])
        .pipe(deploy());
});

