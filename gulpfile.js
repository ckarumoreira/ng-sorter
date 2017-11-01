var gulp = require("gulp"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  copy = require("gulp-copy"),
  pug = require("gulp-pug"),
  babel = require("gulp-babel"),
  templateCache = require("gulp-angular-templatecache");

gulp.task("sorter", () => {
  gulp.src("src/**/*.js")
    .pipe(concat("ng-sorter.js"))
    .pipe(babel({
      presets: ["es2015"],
      plugins: ["transform-remove-strict-mode"]
    }))
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

gulp.task("minify", [ "sorter", "templates", "vendors" ], () => {
  gulp.src([
      "dist/js/vendors.js",
      "dist/js/ng-sorter.js",
      "dist/js/templates.js"
    ])
    .pipe(concat("ng-sorter.min.js"))
    .pipe(uglify().on('error', function(e){
      console.log(e);
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task("default", ["minify"], () => {
  
});