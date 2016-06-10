'use strict';

var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    config      = require('../config'),
    util        = require('util'),
    data        = require('gulp-data'),
    pug        = require('gulp-pug'),
    gutil       = require('gulp-util'),
    fs          = require('fs'),
    DefaultRegistry = require('undertaker-registry');

var Jade = function() {
  DefaultRegistry.call(this);
  this.set('pug', function() {
    gutil.log("-------------------- pug --------------------")
    return gulp.src(config.path.pugEntry)
               .pipe(plumber())
               //.pipe(cache())
               /*
               .pipe(data(function(file) {
                   return require(config.path.jsonFile)
               }))
               .pipe(pug({
                   pretty: true
               }))
                */
               .pipe(pug({
                   data: JSON.parse(fs.readFileSync(config.path.jsonFile)),
                   pretty: false
               }))
               .pipe(gulp.dest(config.path.dist.html))
  });
};

util.inherits(Jade, DefaultRegistry);

module.exports = new Jade();
