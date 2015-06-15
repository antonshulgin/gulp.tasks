'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

module.exports = function (config) {
	return function () {
		var task =  gulp.
			src(config.src).
			pipe(concat(config.filename)).
			pipe(gulp.dest(config.dest));

		if (config.callback) { task.pipe(config.callback()); }
		return task;
	};
};
