import gulp         from 'gulp';
import util         from 'gulp-util';
import concat       from 'gulp-concat';
import plumber      from 'gulp-plumber';
import babel        from 'gulp-babel';
import uglify       from 'gulp-uglify';
import browsersync  from 'browser-sync';
import child        from 'child_process';
import hygienist    from 'hygienist-middleware';
import del          from 'del';

const siteRoot = '_site';
const jekyllLogger = buffer => {
  buffer.toString().split(/\n/).forEach((message) => util.log(`Jekyll: ${message}`));
};

const paths = {
  scripts: '_scripts/*.js',
  dist: 'assets/js/'
};


browsersync.create();

gulp.task('clean', fn => del([paths.dist, siteRoot], fn));

gulp.task('scripts', ['clean'], () => {
  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(babel())
    .pipe(concat('bundle.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve', '--watch', '--incremental', '--drafts']);
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browsersync.init({
    files: [`${siteRoot}/**`],
    port: 4000,
    server: {
      baseDir: siteRoot,
      middleware: hygienist(siteRoot)
    }
  });
});

gulp.task('watch', () => {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['scripts', 'serve', 'jekyll', 'watch']);
