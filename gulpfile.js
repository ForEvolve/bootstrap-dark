var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

gulp.task('build-theme', function () {
    return gulp.src(['scss/bootstrap-dark.scss', 'scss/toggle-*.scss', 'scss/prefers-color-scheme.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({ includePaths: [__dirname] }).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css/'))
        .pipe(cleanCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('copy-bootstrap-js', function () {
    return gulp
        .src(['node_modules/bootstrap/dist/js/*'])
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('copy-dist-to-wwwroot', function () {
    return gulp
        .src(['dist/**/*'])
        .pipe(gulp.dest('app/wwwroot/'));
});

gulp.task('watch', gulp.series(gulp.parallel('copy-bootstrap-js', gulp.series('build-theme', 'copy-dist-to-wwwroot')), function () {
    gulp.watch(['scss/*.scss'], gulp.series('build-theme', 'copy-dist-to-wwwroot'));
}));

gulp.task('default', gulp.parallel('copy-bootstrap-js', gulp.series('build-theme', 'copy-dist-to-wwwroot')));
