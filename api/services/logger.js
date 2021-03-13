const moment                    = require('moment');
const pe                        = require('parse-error');
const chalk                     = require('chalk');

const outputLogInfo = function (type, message, data) {
    let dataStr = '';
    if (data instanceof Error) {
        dataStr = JSON.stringify(pe(data));
    } else {
        dataStr = (data ? JSON.stringify(data) : '');
    }
    console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss SSS")}]\t${type}\t${'API: '+message}\t${dataStr}`);
};

module.exports.info = function (msg, data) {
    outputLogInfo(`${chalk.white.bgBlueBright(' INFO ')}`, msg, data);
};

module.exports.error = function (msg, data) {
    outputLogInfo(`${chalk.white.bgRedBright(' ERROR ')}`, msg, data);
};

module.exports.warn = function (msg, data) {
    outputLogInfo(`${chalk.black.bgYellowBright(' WARN ')}`, msg, data);
};

module.exports.debug = function (msg, data) {
    outputLogInfo('DEBUG', msg, data);
};

module.exports.adminAccess = function (msg, data) {
    outputLogInfo('ADMINACCESS', msg, data);
};