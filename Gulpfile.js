const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const jasmine = require('gulp-jasmine');

const srcPath = 'public';
const distPath = 'public/dist';
const testPath = 'test';

var paths = {
	scripts: [srcPath + '/scripts/**/*.jsx', srcPath + '/scripts/**/*.js'],
	styles: [srcPath + '/styles/**/*.scss'],
	tests: [testPath + '/**/*.js']
};

gulp.task('babel', function() {
	return gulp.src(paths.scripts)
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest(distPath + '/scripts'));
});

gulp.task('test', function () {
	return gulp.src(paths.tests)
		.pipe(jasmine());
});

gulp.task('style', function () {
	return gulp.src(paths.styles)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(distPath + '/styles'));
});

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['babel']);
	gulp.watch(paths.styles, ['style']);
});

gulp.task('default', ['babel', 'style']);