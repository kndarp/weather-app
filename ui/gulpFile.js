var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){
    browserify('./src/js/index.js')
        .transform('reactify')
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('dist/js')) //we don't need to create this folder gulp will auto create this
});

//Then we create copy task
gulp.task('copy',function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/bootstrap/**/*.*')
        .pipe(gulp.dest('dist/bootstrap'));
    gulp.src('src/js/**/*.*')
        .pipe(gulp.dest('dist/javascripts'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/stylesheets'));
    gulp.src('src/img/*.*')
        .pipe(gulp.dest('dist/images'));
});
//
gulp.task('default',['browserify','copy'],function(){
    return gulp.watch('./src/js/**/*.*',['browserify','copy']);
});
