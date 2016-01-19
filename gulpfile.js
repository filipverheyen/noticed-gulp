var gulp = require('gulp');
var sass = require('gulp-sass');
var cssGlobbing = require('gulp-css-globbing');
var livereload = require('gulp-livereload');

function errorAlert(error){
	notify.onError({title: "SCSS Error", message: "Check your terminal", sound: "Sosumi"})(error); //Error Notification
	console.log(error.toString());//Prints Error to Console
	this.emit("end"); //End function
};

gulp.task('sass', function(){
  	return gulp.src('assets/scss/**/*.scss')
	  	.pipe(cssGlobbing({
	      // Configure it to use SCSS files
	      extensions: ['.scss']
	    }))
	.pipe(plumber({errorHandler: errorAlert}))
    	.pipe(sass()) // Using gulp-sass
    	.pipe(gulp.dest('assets/css'))
    	.pipe(livereload())
    	.pipe(sourcemaps.init())
    	.pipe(sourcemaps.write('./'));
});

gulp.task('watch', function(){
	livereload.listen();
  	gulp.watch('assets/scss/**/*.scss', ['sass']);
  	// Other watchers
});