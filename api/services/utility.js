const log                       = require('./logger');
const {to}                      = require('await-to-js');
const pe                        = require('parse-error');

module.exports.to = async (promise) => {
    const [err, res] = await to(promise);
    return err ? [pe(err)] : [null, res];
};

// Error Web Response
module.exports.ReE = function(res, errMsg, err, code) {
    // log error if exist
    if (err) log.error(`${res.requestTxt} ${errMsg}`, err);
    if (code) {
        res.statusCode = code;
    } else {
        res.statusCode = err ? 500 : 422;
    }
    return res.json({success:false, error: errMsg});
};

// Success Web Response
module.exports.ReS = function(res, data, code){
    let send_data = {success:true};
    if(typeof data === 'object') send_data = Object.assign(data, send_data);//merge the objects
    if(typeof code !== 'undefined') res.statusCode = code;
    return res.json(send_data)
};

module.exports.TERR = function(errMsg, err){ // TE stands for Throw Error
    const errorString = `${errMsg} : ${err ? JSON.stringify(pe(err)) : 'noerr'}`;
    log.error(errorString);
    throw new Error(errMsg);
};