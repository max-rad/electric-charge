import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import prettyHtml from 'gulp-pretty-html';
import cached from 'gulp-cached';

const compilePug = () => {
  return gulp
    .src('source/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(prettyHtml({
      indent_size: 2,
      unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br'],
    }))
    .pipe(cached('pug'))
    .pipe(gulp.dest('build'));
};

export default compilePug;
