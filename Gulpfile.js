const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

const srcPath = 'resources';
const distPath = 'public/dist';

var paths = {
	scripts: [srcPath + '/scripts/**/*.jsx'],
	styles: [srcPath + '/styles/**/*.scss']
};

gulp.task('babel', function() {
	return gulp.src(paths.scripts)
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest(distPath + '/scripts'));
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