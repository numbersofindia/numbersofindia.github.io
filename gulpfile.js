const { src, dest, parallel, series } = require('gulp');
const gulp = require('gulp');
const bs = require('browser-sync').create(); // create a browser sync instance.
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const nunjucks = require('gulp-nunjucks');
var argv = require('yargs').argv;
const nunjucks_lib = require('nunjucks');



function browserSyncHome() {
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

function html(){
    return src('index.html')
        .pipe(nunjucks.compile())
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

function imgs() {
    return src('res/imgs/*')
        .pipe(dest('build/res/imgs'))
}

function watchHome() {
    gulp.watch("./scss/*", css);
    gulp.watch("./js/*", js);
    gulp.watch("./*.html", html);
    gulp.watch("./data/*", data);
    gulp.watch("./res/*", res);
    gulp.watch("./res/imgs/*", imgs);
}

const watch = gulp.parallel(watchHome, browserSyncHome);
const build = gulp.series(gulp.parallel(css, html, js, data, res, imgs));


const storyLocation = argv.story;
console.log("storyLocation", storyLocation);


function browserSyncStory() {
    bs.init({
        server: {
            baseDir: "./build"
        }
    });
}

function bsReload() {
    bs.reload();
}

function cssStory() {
    return src(storyLocation+'scss/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(dest('build/'+storyLocation))
        .pipe(bs.stream())
}

function jsStory() {
    return src(storyLocation+'js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('jsmain.js'))
        .pipe(dest('build/'+storyLocation))
        .pipe(bs.stream())
}

function htmlStory(){
    // console.log('dirnme',__dirname);
    // nunjucks.configure('./html-templates');
    return src(storyLocation+'index.html')
        .pipe(nunjucks.compile({},{
            env: new nunjucks_lib.Environment(new nunjucks_lib.FileSystemLoader('./html-templates'))
          }))
        .pipe(dest('build/'+storyLocation))
        .pipe(bs.stream())
}


function dataStory() {
    return src(storyLocation+'data/*')
        .pipe(dest('build/'+storyLocation+'data'))
        .pipe(bs.stream())
}

function cleanifyStory() {
    return src('build/'+storyLocation, {read: false})
        .pipe(clean());
}

function resStory() {
    return src(storyLocation+'res/*')
        .pipe(dest('build/'+storyLocation+'res'))
}

function watchStory() {
    gulp.watch(storyLocation+"/scss/*", cssStory);
    gulp.watch(storyLocation+"/js/*", jsStory);
    gulp.watch(storyLocation+"/*.html", htmlStory);
    gulp.watch(storyLocation+"/data/*", dataStory);
    gulp.watch(storyLocation+"/res/*", resStory);
}

const watchstory = gulp.parallel(watchStory, browserSyncStory);
const buildstory = gulp.parallel(cssStory, htmlStory, jsStory, dataStory, resStory);
const cleanifystory = gulp.parallel(cleanifyStory);



exports.watch = watch;
exports.bsReload = bsReload;
exports.watchstory = watchstory;
exports.buildstory = buildstory;
exports.cleanifystory = cleanifystory;
exports.default = build;
