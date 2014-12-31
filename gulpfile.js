// TODO: set up a full build to 'build' directory
// and watch changes to all files


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
    deploy = require('gulp-gh-pages');


/*
 * Task to delete our 'build' folder before watching or building
 */

// gulp.task('clean', function () {
//     del(['./build']);
// });

gulp.task('clean', function(cb) {
    del(['build'], cb);
});


/*
 * Task to compile our handlebars into javascript (run 'gulp templates')
 */


gulp.task('templates', function() {
    return gulp.src('source/templates/*.hbs')
        .pipe(handlebars())
        .pipe(defineModule('plain'))
        .pipe(declare({
            namespace: 'MyApp.templates'
        }))
        .pipe(gulp.dest('build/js'));
});


/*
 * Task to compile our Sass files (run 'gulp sass')
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
 * Task to build our project to the 'build' folder
 */

gulp.task('build', ['clean'], function (cb) {
    runSequence(['sass'], cb);
});

/*
 * Define our browserSync configuration.
 */

var config = {
    server: {
        baseDir: "./source",
    },
    browser: "google chrome canary"
};


/*
 * 1 - Task to start the server with our configuration settings
 * 2 - Watch all our assets
 */

gulp.task('watch', ['build'], function() {
    browserSync(config);
    gulp.watch("source/styles/**/*.scss", ['sass']);
    gulp.watch("source/index.html", ['bs-reload']);
    gulp.watch("source/scripts/main.js", ['bs-reload']);
    gulp.watch("source/templates/*", ['templates'], ['bs-reload']);
});


/*
 * Task to reload all our browsers (run 'gulp bs-reload')
 */

gulp.task('bs-reload', function() {
    browserSync.reload();
});


/*
 * The default task (run 'gulp')
 */


gulp.task('default', ['serve'], function() {
});


/*
 * Run a deploy to github pages (run 'gulp deploy')
 */

gulp.task('deploy', function() {
    return gulp.src(['build/*', 'build/js/*', 'build/css/*'])
        .pipe(deploy());
});
