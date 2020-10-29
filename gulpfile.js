const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile SASS
function style() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("src/css/"))
        .pipe(browserSync.stream());
}

// Watch SASS & Serve
function watch() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
    gulp.watch(['src/scss/*.scss'], style);
    gulp.watch("src/*.html").on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;