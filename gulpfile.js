const { src, dest, parallel, series } = require('gulp');
const gulp = require('gulp');
const bs = require('browser-sync').create(); // create a browser sync instance.
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const clean = require('gulp-clean');



function browserSync() {
    bs.init({
        server: {
            baseDir: "./build"
        }
    });
}

function bsReload() {
    bs.reload();
}

function css() {
    return src('scss/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(dest('build'))
        .pipe(bs.stream())
}

function js() {
    return src('js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('jsmain.js'))
        .pipe(dest('build'))
        .pipe(bs.stream())
}

function html() {
    return src('*.html')
        .pipe(dest('build'))
        .pipe(bs.stream())
}


function data() {
    return src('data/*')
        .pipe(dest('build/data'))
        .pipe(bs.stream())
}

function cleanify() {
    return src('build', {read: false})
        .pipe(clean());
}

function res() {
    return src('res/*')
        .pipe(dest('build/res'))
}

function watchFiles() {
    gulp.watch("./scss/*", css);
    gulp.watch("./js/*", js);
    gulp.watch("./*.html", html);
    gulp.watch("./data/*", data);
    gulp.watch("./res/*", res);
}

const watch = gulp.parallel(watchFiles, browserSync);
const build = gulp.series(cleanify,gulp.parallel(css, html, js, data, res));


exports.js = js;
exports.css = css;
exports.html = html;
exports.data = data;
exports.watchFiles = watchFiles;
exports.watch = watch;
exports.bsReload = bsReload;
exports.default = build;