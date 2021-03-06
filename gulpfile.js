const gulp        = require('gulp');
const sass        = require('gulp-sass');
const rename      = require('gulp-rename');
const browserSync = require('browser-sync').create();

const htmlPath    = './Deploy/*.html';
const sassPath    = './Code/SASS/**/*.scss';
const sassStyle   = './Code/SASS/08-Common.scss';

const deployPath = './Deploy';

gulp.task('default', ['browserSync'], function() {
  gulp.watch(sassPath, ['sass']);
  gulp.watch(htmlPath, ['html']);
});

gulp.task('sass', function() {
  gulp.src(sassStyle)
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest(deployPath))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function() {
  gulp.src(htmlPath).pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function() {
  browserSync.init({server: { baseDir: deployPath } });
})
