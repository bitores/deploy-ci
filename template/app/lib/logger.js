import os from 'os';
import util from 'util';
import utility from 'utility';
import Logger from 'mini-logger';
import formater from 'error-formater';

const config = global.context.$config;

const debug = require('debug')('cnpmjs.org:logger');

const isTEST = process.env.NODE_ENV === 'test';
const categories = ['sync_info', 'sync_error'];

const logger = module.exports = Logger({
  categories: categories,
  dir: config.logdir,
  duration: '1d',
  format: '[{category}.]YYYY-MM-DD[.log]',
  stdout: config.debug && !isTEST,
  errorFormater: (err) =>{
    const msg = formater.both(err);
    return msg.text;
  },
  seperator: os.EOL,
});

console.log(config.logdir)
logger.syncInfo = function () {
  const args = [].slice.call(arguments);
  if (typeof args[0] === 'string') {
    args[0] = util.format('[%s][%s] ', utility.logDate(), process.pid) + args[0];
  }
  if (debug.enabled) {
    debug.apply(debug, args);
  }
  logger.sync_info.apply(logger, args);
};

logger.syncError = function () {
  const args = [].slice.call(arguments);
  if (typeof args[0] === 'string') {
    args[0] = util.format('[%s][%s] ', utility.logDate(), process.pid) + args[0];
  }
  if (debug.enabled) {
    debug.apply(debug, args);
  }
  logger.sync_error.apply(logger, arguments);
};


export default logger;