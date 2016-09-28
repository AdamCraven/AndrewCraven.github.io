'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src('./app/sass/**/*.scss')
	.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
	.pipe(autoprefixer({browsers: ['> 0%']}))
    .pipe(gulp.dest('./app/assets/'))
    .pipe(browserSync.reload({
    	stream: true
    	}))
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	})
})

gulp.task('watch', ['browserSync'], function () {
  gulp.watch(['./app/sass/**/*.scss'], ['sass']);
});

