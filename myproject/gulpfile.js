var gulp        = require('gulp'),
    sass        = require('gulp-sass');
    browserSync = require('browser-sync');

gulp.task('sass',function () {
  return gulp.src('app/sass/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync',function () {
  browserSync({
    server:{
      baseDir: 'app'
    },
    notify:false
  });
});

gulp.task('watch',['browser-sync','sass'],function () {
  gulp.watch('app/sass/**/*.scss',['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});



/*gulp.task('mytask',function () {
  return gulp.src('source-files')
  .pipe(plugin())
  .pipe(gulp.dest('folder'))
});
*/
/*gulp.task('mytask',function () {
  console.log('Привет, я таск!');
});
*/
