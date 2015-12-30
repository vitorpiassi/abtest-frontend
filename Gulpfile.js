const gulp = require('gulp');

const babel = require('gulp-babel'),
	sass = require('gulp-sass'),
	jasmine = require('gulp-jasmine');

const paths = {
	SRC: 'public',
	DIST: 'public/dist',
	TEST: 'test'};

paths.SCRIPTS = [paths.SRC + '/scripts/**/*.jsx', paths.SRC + '/scripts/**/*.js'];
paths.STYLES = [paths.SRC + '/styles/**/*.scss'];
paths.TESTS = [paths.TEST + '/**/*.js'];

gulp.task('compile', function() {
	return gulp.src(paths.SCRIPTS)
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest(paths.DIST + '/scripts'));
});

gulp.task('test', function () {
	return gulp.src(paths.TESTS)
		.pipe(jasmine());
});

gulp.task('style', function () {
	return gulp.src(paths.STYLES)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.DIST + '/styles'));
});

gulp.task('watch', function() {
	gulp.watch(paths.SCRIPTS, ['compile']);
	gulp.watch(paths.STYLES, ['style']);
});

gulp.task('default', ['compile', 'style']);