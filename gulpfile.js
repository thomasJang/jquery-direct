'use strict';

var fs = require('fs');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var shell = require('gulp-shell');
var replace = require('gulp-replace');
var sourcemaps = require('gulp-sourcemaps');


function errorAlert(error) {
    notify.onError({title: "Gulp Error", message: "Check your terminal", sound: "Purr"})(error); //Error Notification
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
}


gulp.task('default', function () {
    // scripts
    gulp.watch('src/**/*.js', ['JS']);
});


/**
 * for JS
 */
gulp.task('JS', function (k, __p) {

    return gulp.src(['src/*.js'])
        .pipe(plumber({errorHandler: errorAlert}))
        .pipe(sourcemaps.init())
        .pipe(concat('jquery-direct.js'))
        .pipe(babel({
            presets: ['es2015'],
            compact: false
        }))
        .pipe(gulp.dest('dist'))
        .pipe(concat('jquery-direct.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

});

/**
 * src/{module}/test `npm install` auto run.
 * this task require very long time.(5 ~ 10 minutes. maybe more :p)
 */
gulp.task('test-npm-install', function () {
    var commands = [];
    for (var k in PATHS) {
        commands.push('cd ' + PATHS[k].root + ' && npm install');
    }

    gulp.src('').pipe(shell(commands));
});