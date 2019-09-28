const fs = require('fs');
const gulp = require('gulp');
const path = require('path');
const {
  createBuildClientJSWebpackTask,
  createBuildServerJSTask,
  createWatchTask,
  createRevRenameTask,
  createBuildViewsTask,
  createCreateDirectoriesGulpTask,
  createCopyGulpTask,
  createRunServerTask,
  createCreateVenvTask,
  createDeleteTask,
} = require('./gulpfile.lib');

const serverWatchGlobs = {};
const clientWatchGlobs = {};

const production = process.env.NODE_ENV === 'production';

// Base client tasks
const buildClientJSWebpackArgs = {
  sourceFile: 'client/js/InitWeb.ts',
  destDir: 'dist/app/server/public/js',
  destFile: 'main.js',
  cssDestDir: 'dist/app/server/public/assets',
  production,
  // allowEval: false, // Do this when debugging weird React exceptions
  watch: false,
};

createBuildClientJSWebpackTask('build-client-js', buildClientJSWebpackArgs);

createBuildClientJSWebpackTask(
  'watch-client-js',
  Object.assign({}, buildClientJSWebpackArgs, {
    watch: true,
  }),
);

createCopyGulpTask(
  'copy-assets',
  'client/assets/{**/*,*}',
  'dist/app/server/public/assets',
  clientWatchGlobs,
);

// Client tasks
gulp.task('build-client', gulp.parallel(['copy-assets', 'build-client-js']));
createWatchTask('start-watching-client', clientWatchGlobs);

gulp.task(
  'watch-client',
  gulp.parallel(['copy-assets', 'watch-client-js']),
  gulp.series('start-watching-client'),
);

// Base server tasks
createBuildServerJSTask({
  name: 'build-server-js',
  globs: '{server,client/{js,templates},common}/**/*.ts?(x)',
  destination: 'dist/app',
  serverWatchGlobs,
});

if (!production) {
  // In development, we generally don't need to rebuild/restart the
  // server for client changes since we don't do server-side rendering
  serverWatchGlobs['build-server-js'] = '{server,common}/**/*.ts?(x)';
}

createRevRenameTask(
  'rev-rename-client',
  'dist/app/server/public/{js/main.js,assets/main.css}',
  'dist/app/server/public',
  'dist/app/server/public/js',
  production,
);

createBuildViewsTask('build-views', {
  glob: 'server/views/*.ejs',
  dest: 'dist/app/server/views',
  revManifestPath: 'dist/app/server/public/js/rev-manifest.json',
  production,
  watchGlobs: serverWatchGlobs,
});

createCopyGulpTask(
  'copy-static',
  '{{client,server}/**/{*.json,.env*,*.scss},server/templates/**/*.ejs}',
  'dist/app',
  serverWatchGlobs,
);

gulp.task(
  'rename-and-copy-client',
  gulp.series('rev-rename-client', 'build-views'),
);

createCreateDirectoriesGulpTask('create-log-dir', ['dist/app/server/logs']);

createCopyGulpTask('copy-python', 'python/**/*.{py,txt}', 'dist/app/python');
const venvPath = path.join('dist', 'app', '.venv');
const requirementsPath = path.join('dist', 'app', 'python', 'requirements.txt');
createCreateVenvTask('create-python-venv', venvPath, requirementsPath);

gulp.task('build-python', gulp.series('copy-python', 'create-python-venv'));

// Main server tasks
gulp.task(
  'build-server',
  gulp.parallel([
    'build-server-js',
    'copy-static',
    'rename-and-copy-client',
    'create-log-dir',
  ]),
);

const env = {
  NODE_ENV: production ? 'production' : 'development',
  // Allow DATABASE to be overridden: e.g., DATABASE=production gulp all
  DATABASE: process.env.DATABASE || (production ? 'production' : 'development'),
};

const runWatchGlobs = ['dist/app', '!dist/app/server/public'];

createRunServerTask(
  'run-server',
  'dist/app/server/index.js',
  runWatchGlobs,
  env,
);
createWatchTask('start-watching-server', serverWatchGlobs);

createDeleteTask('clean', 'dist');

gulp.task(
  'watch-server',
  gulp.series('build-server', 'start-watching-server', 'run-server'),
);

// Overall tasks
gulp.task('build-all', gulp.series('build-client', 'build-server'));

gulp.task('watch-all', gulp.series('watch-client', 'watch-server'));

gulp.task('all', gulp.series(['watch-all']));

gulp.task('scripts', gulp.series(['build-server', 'start-watching-server']));
