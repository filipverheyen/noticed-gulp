var gulp = require('gulp');
	concat = require('gulp-concat');
	sass = require('gulp-sass');
	cssGlobbing = require('gulp-css-globbing');
	livereload = require('gulp-livereload');
	plumber = require('gulp-plumber');
	sourcemaps = require('gulp-sourcemaps');
	notify = require("gulp-notify");
	autoprefixer = require('gulp-autoprefixer');
	cache = require('gulp-cache'),
	imagemin = require('gulp-imagemin'),
	cssnano = require('gulp-cssnano'),
	pngquant = require('imagemin-pngquant');


function errorAlertSass(error){
	notify.onError({title: "SCSS Error", message: "Check your terminal", sound: "Sosumi"})(error); //Error Notification
	console.log(error.toString());//Prints Error to Console
	this.emit("end"); //End function
};
function errorAlertJS(error){
	notify.onError({title: "JS Error", message: "Check your terminal", sound: "Sosumi"})(error); //Error Notification
	console.log(error.toString());//Prints Error to Console
	this.emit("end"); //End function
};

gulp.task('sass', function(){
  	return gulp.src('build/scss/**/*.scss')
	.pipe(cssGlobbing({extensions: ['.scss']}))
	.pipe(plumber({errorHandler: errorAlertSass}))
	.pipe(sourcemaps.init({loadMaps: true}))
    	.pipe(sass()) // Using gulp-sass
    	.pipe(autoprefixer())
	.pipe(sourcemaps.write('../maps'))
    	.pipe(gulp.dest('assets/css'))
    	.pipe(rename({suffix: '.min'}))
    	.pipe(cssnano())
    	.pipe(gulp.dest('assets/css'))
    	.pipe(livereload());
});

gulp.task('scripts', function () {
	return gulp.src("build/js/*.js")
	.pipe(plumber({errorHandler: errorAlertJS}))
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(concat('scripts.js'))
	.pipe(sourcemaps.write('../maps'))
	.pipe(gulp.dest('assets/js/'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js/'))
	.pipe(livereload());
});

gulp.task('images', function() {
	return gulp.src('src/img/*.{png,gif,jpg,jpeg,svg}')
	.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true, use: [pngquant()] })))
	.pipe(gulp.dest('dist/img'))
});

gulp.task('watch', function(){
	livereload.listen();
  	gulp.watch('src/scss/**/*.scss', ['sass']);
  	gulp.watch('src/js/*.js', ['scripts']);
  	gulp.watch('src/img/*{png,gif,jpg,jpeg,svg}', ['images']);
});