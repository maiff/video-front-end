var gulp = require('gulp');
var sass = require('gulp-sass');


var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('./src/public/sass/*.scss')
        .pipe(sass({
            sourceComments: true,
            outputStyle: 'expanded',
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./dest/public/css'))		
});

gulp.task('watch', ['sass'], function() {
	browserSync.init({
        server:"./",
        open: false
    });
    var sassWatcher = gulp.watch('./src/public/sass/*.scss', ['sass']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
    gulp.watch("./dest/public/css/*.css").on('change', browserSync.reload);
});