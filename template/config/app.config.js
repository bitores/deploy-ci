const os = require('os');
const utility = require('utility');
const mkdirp = require('mkdirp');
const path = require('path');
const nfs = require('fs-cnpm');
const pkg = require('../package.json');


var version = pkg.version;

var root = path.dirname(__dirname);
var dataDir = path.join(process.env.HOME || root);

const config = {
  port: 1029,
  env: 'production',// process.env.IS_DEV?"development":"production"
  mock: false,
  version: version,
  dataDir: dataDir,


  logdir: path.join(dataDir, 'logs'),
  // update file template dir
  uploadDir: path.join(dataDir, 'downloads'),

}

mkdirp.sync(config.logdir);
mkdirp.sync(config.uploadDir);

module.exports = config;
