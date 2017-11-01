var gulp = require("gulp"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  pug = require("gulp-pug"),
  templateCache = require("gulp-angular-templatecache");

gulp.task("sorter", () => {
  gulp.src("src/**/*.js")
    .pipe(concat("ng-sorter.js"))
    .pipe(gulp.dest("dist/js"));
});

gulp.task("templates", () => {
  gulp.src("src/**/*.pug")
    .pipe(pug())
    .pipe(templateCache({
      module: "ng-sorter.components"
    }))
    .pipe(gulp.dest("dist/js"));
})

gulp.task("vendors", () => {
  gulp.src([
    "components/thenby/thenBy.min.js"
  ])
    .pipe(concat("vendors.js"))
    .pipe(gulp.dest("dist/js"));
});

gulp.task("minify", [ "sorter", "templates"], () => {
  gulp.src([
    "dist/js/ng-sorter.js",
    "dist/js/templates"
  ])
    .pipe(concat("ng-sorter.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("default", ["minify", "vendors"], () => {
  
});