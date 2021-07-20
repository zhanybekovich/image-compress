const gulp = require("gulp"),
  imagemin = require("gulp-imagemin"),
  del = require("del");

const src = "src/",
  dist = "compressed/";

const config = {
  src: {
    img: src + "images/**/*.{jpg,jpeg,png,gif,svg}",
  },
  dist: {
    img: dist + "images/",
  },
};

const compressImg = () => {
  return gulp
    .src(config.src.img)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 50, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest(config.dist.img));
};

const cleanDist = () => {
  return del("compressed");
};

exports.default = gulp.series(cleanDist, compressImg);
exports.compress = gulp.series(cleanDist, compressImg);
