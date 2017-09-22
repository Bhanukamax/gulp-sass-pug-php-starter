'use strict';

var gulp = require('gulp')
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');

gulp.task('sass', function(){
	return gulp.src('./src/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer('last 2 versions'))
	.pipe(gulp.dest('./dist/css/'));
});


gulp.task('pug', function(){
	return gulp.src('./src/views/*.pug')
	.pipe(plumber())
	.pipe(pug({
		pretty: true
	
	}))
	.pipe(gulp.dest('./views'));

});
gulp.task('default',['pug', 'sass'], function(){
	gulp.watch([
		'./src/sass/*.scss',
		'./src/sass/**/*.scss'
		]
		, ['sass']);
	gulp.watch([
		'./src/views/*.pug',
		'./src/views/**/*.pug'
		]
		, ['pug']);
}); 
