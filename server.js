const child = require('child_process');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

function log(data, label = 'log', error = false) {
  data
    .toString()
    .split(/\n/)
    .filter(line => line.length > 0)
    .forEach(line => console.log(`${error ? chalk.red(label) : chalk.green(label)}: `, line.trim()));
}

let server = child.spawn('jekyll', ['serve', '--watch', '--incremental', '--drafts']);

server.stdout.on('data', data => log(data, 'Jekyll'));
server.stderr.on('data', data => log(data, 'Jekyll', true));

let compiler = webpack(webpackConfig);

compiler.watch({ignored: /node_modules/}, (error, stats) => {
  log(stats, 'webpack', error || stats.hasErrors());
});
