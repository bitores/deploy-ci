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

  mail: {
    enable: true,
    appname: 'cnpmjs.test',
    from: 'cnpmjs.org mail sender <adderss@gmail.com>',
    service: 'qq',
    port: 465,
    secureConnection: true, // 使用 SSL
    auth: {
      user: '773155801@qq.com',
      //这里密码不是qq密码，是你设置的smtp密码
      pass: 'htgmlubksnodbcid'
    }
  },
  sshServer: {
    host: "example.com",
    port: 22,
    username: "admin",
    password: "root",
    privateKey: "private key",
    passphrase: 'private_key_password',
    path: "path"
  }
}

mkdirp.sync(config.logdir);
mkdirp.sync(config.uploadDir);

module.exports = config;
