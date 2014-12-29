/*
 * Define our dependencies.
 */

var gulp = require('gulp'),
    deploy = require('gulp-gh-pages'),
    sass = require('gulp-ruby-sass'),
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
 * Compile our Sass files.
 */

gulp.task('sass', function() {
    return sass('source/styles/mnml.scss')
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('source/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

/*
 * Start the server, calling our configuration settings
 */

gulp.task('browser-sync', function() {
    browserSync(config);
});

/*
 * Reload all Browsers
 */

gulp.task('bs-reload', function() {
    browserSync.reload();
});

/*
 * Run the default task ('gulp')
 *   1 - watch & compile scss
 *   2 - watch html
 */

gulp.task('default', ['browser-sync'], function() {
    gulp.watch("./source/styles/**/*.scss", ['sass']);
    gulp.watch("./source/index.html", ['bs-reload']);
});

/*
 * Deploy to github pages
 */

gulp.task('deploy', function() {
    return gulp.src(['source/*', 'source/scripts/*'])
        .pipe(deploy());
});
