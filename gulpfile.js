var browserSync = require('browser-sync').create();
var gulp = require('gulp');

gulp.task('default', function() {
  gulp.watch('dist/**/*.*').on('change', browserSync.reload);

  browserSync.init({
    port: 3636,
    server: {baseDir: './'},
    startPath: '/dist'
  });
});