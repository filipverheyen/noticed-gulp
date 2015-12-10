var gulp = require('gulp');
var sass = require('gulp-sass');
var cssGlobbing = require('gulp-css-globbing');
var livereload = require('gulp-livereload');

gulp.task('sass', function(){
  	return gulp.src('assets/scss/**/*.scss')
	  	.pipe(cssGlobbing({
	      // Configure it to use SCSS files
	      extensions: ['.scss']
	    }))
    	.pipe(sass()) // Using gulp-sass
    	.pipe(gulp.dest('assets/css'))
    	.pipe(livereload())
});

gulp.task('watch', function(){
	livereload.listen();
  	gulp.watch('assets/scss/**/*.scss', ['sass']); 
  	// Other watchers
});