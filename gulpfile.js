// TODO: set up a full build to 'build' directory
// and watch changes to all files


/*
 * Define our dependencies.
 */

var gulp = require('gulp'),
    deploy = require('gulp-gh-pages'),
    sass = require('gulp-ruby-sass'),
    handlebars = require('gulp-handlebars'),
    defineModule = require('gulp-define-module'),
    declare = require('gulp-declare'),
    browserSync = require('browser-sync');

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
 * Task that will start the server,
 * and call our configuration settings ('gulp browser-sync')
 */

gulp.task('browser-sync', function() {
    browserSync(config);
});

/*
 * Task that will reload all our browsers ('gulp bs-reload')
 */

gulp.task('bs-reload', function() {
    browserSync.reload();
});

/*
 * Task that will compile our handlebars into javascript ('gulp templates')
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
 * Task that will compile our Sass files ('gulp sass')
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
 * Run the default task ('gulp')
 *   1 - watch & compile scss
 *   2 - watch html
 *   3 - watch js
 *   4 - watch hbs & pre-compile
 */

gulp.task('default', ['browser-sync'], function() {
    gulp.watch("source/styles/**/*.scss", ['sass']);
    gulp.watch("source/index.html", ['bs-reload']);
    gulp.watch("source/scripts/main.js", ['bs-reload']);
    gulp.watch("source/templates/*", ['templates'], ['bs-reload']);
});

/*
 * Run a deploy to github pages ('gulp deploy')
 */

gulp.task('deploy', function() {
    return gulp.src(['build/*', 'build/js/*', 'build/css/*'])
        .pipe(deploy());
});
