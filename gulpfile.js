var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

gulp.task('build-theme', function () {
    return gulp.src(['scss/bootstrap-dark.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer({
            browsers: [
                'Chrome >= 35',
                'Firefox >= 38',
                'Edge >= 12',
                'Explorer >= 10',
                'iOS >= 8',
                'Safari >= 8',
                'Android 2.3',
                'Android >= 4',
                'Opera >= 12']
        })]))
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
        .pipe(gulp.dest('wwwroot/'));
});

gulp.task('watch', gulp.series(gulp.parallel('copy-bootstrap-js', 'build-theme'), function () {
    gulp.watch(['scss/*.scss'], gulp.series('build-theme', 'copy-dist-to-wwwroot'));
}));

gulp.task('default', gulp.parallel('copy-bootstrap-js', gulp.series('build-theme', 'copy-dist-to-wwwroot')), function () {
});
