gulp.task('watch', function () {
  gulp.watch(sourcePath.sassSource, ['sass']);
  gulp.watch(['src/**/*', sourcePath.pugSource], ['view']);
  gulp.watch(sourcePath.jsSource, ['script']);
  gulp.watch(sourcePath.imgSource, ['images']);

  // init server
  browserSync.init({
      server: {
          proxy: "local.build",
          baseDir: appPath.root
      }
  });

  gulp.watch([appPath.root + '**'], browserSync.reload);
});

gulp.task('default', ['watch']);