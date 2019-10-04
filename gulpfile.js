var gulp = require("gulp");

var less = require("gulp-less");
var path = require("path");

gulp.task("less", function() {
  return gulp
    .src("./style/*.less")
    .pipe(
      less({
        paths: [path.join(__dirname, "less", "includes")]
      })
    )
    .pipe(gulp.dest("./public/css"));
});

/* gulp.task("run", ["less"]);

gulp.task("watch", function() {
  gulp.watch("./style/*.less", ["less"]);
});

gulp.task("default", ["run", "watch"]); */

gulp.task("default", run, watch);

function run() {
  return gulp
    .src("./style/*.less")
    .pipe(
      less({
        paths: [path.join(__dirname, "less", "includes")]
      })
    )
    .pipe(gulp.dest("./public/css"));
}

function watch() {
  gulp.watch("./style/*.less", ["less"]);
}
