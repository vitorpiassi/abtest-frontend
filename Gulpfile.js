const gulp = require('gulp');
const babel = require('gulp-babel');

var paths = {
	scripts: ['public/scripts/**/*.jsx'],
};

gulp.task('babel', function() {
	return gulp.src(paths.scripts)
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['babel']);
});