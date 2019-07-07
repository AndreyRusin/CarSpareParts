const { src, dest, series } = require("gulp");
const $ = require("gulp-load-plugins")();

function html() {
  return src("./src/*.html")
    .pipe($.htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./dist/"));
}

function images() {
  return src("./src/img/*")
    .pipe($.imagemin())
    .pipe(dest("./dist/img"));
}

function sass_f() {
  return src("./src/css/*.css")
    .pipe($.plumber())
    .pipe($.autoprefixer())
    .pipe($.cssnano())
    .pipe(dest("./dist/css/"));
}

exports.default = series(html, sass_f, images);
