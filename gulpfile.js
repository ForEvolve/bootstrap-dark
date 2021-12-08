var gulp = require('gulp'),
    sass = require('gulp-sass')(require('node-sass')),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    concatCss = require('gulp-concat-css');

gulp.task('build-theme', function () {
    return gulp.src(['scss/bootstrap-*.scss', 'scss/toggle-*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({ includePaths: [__dirname] }).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css/'))
        .pipe(cleanCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('clean-prefers-stylesheets', function () {
    const cleanNonColorAttr = require("./clean_non_color_attr.js");
    return gulp.src(['dist/css/bootstrap-prefers-dark.css', 'dist/css/bootstrap-prefers-light.css'])
        .pipe(cleanNonColorAttr({ compress: false }))
        .pipe(cleanCss({ format: "beautify" }))
        .pipe(rename({ suffix: '-color-only' }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('combine-prefers-stylesheets', gulp.parallel(
    function () { return combinePrefersStylesheet("dark", "light"); },
    function () { return combinePrefersStylesheet("light", "dark"); }
));

gulp.task('build-combined-theme', gulp.series('clean-prefers-stylesheets', 'combine-prefers-stylesheets'));

function combinePrefersStylesheet(defaultThemeName, prefersThemeName) {
    return gulp.src([`dist/css/bootstrap-${defaultThemeName}.css`, `dist/css/bootstrap-prefers-${prefersThemeName}-color-only.css`])
        .pipe(cleanCss({ format: "beautify" }))
        .pipe(concatCss(`bootstrap-${defaultThemeName}-prefers-${prefersThemeName}.css`))
        // .pipe(sourcemaps.init())
        // .pipe(sass({ includePaths: [__dirname] }).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css/'))
        .pipe(cleanCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css/'))
        ;
}
gulp.task('copy-bootstrap-js', function () {
    return gulp
        .src(['node_modules/bootstrap/dist/js/*'])
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('copy-dist-to-razor-pages', function () {
    return gulp
        .src(['dist/**/*'])
        .pipe(gulp.dest('samples/razor-pages/wwwroot/'));
});
gulp.task('copy-dist-to-html', function () {
    return gulp
        .src(['dist/**/*'])
        .pipe(gulp.dest('samples/html/'));
});
gulp.task('copy-dist-to-samples', gulp.parallel(
    'copy-dist-to-razor-pages',
    'copy-dist-to-html'
));


gulp.task('watch', gulp.series(gulp.parallel('copy-bootstrap-js', gulp.series('build-theme', 'build-combined-theme', 'copy-dist-to-samples')), function () {
    gulp.watch(['scss/*.scss'], gulp.series('build-theme', 'copy-dist-to-samples'));
}));

gulp.task('default', gulp.parallel('copy-bootstrap-js', gulp.series('build-theme', 'build-combined-theme', 'copy-dist-to-samples')));
