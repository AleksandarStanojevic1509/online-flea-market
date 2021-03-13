let dotEnvOptions = {};
dotEnvOptions.path = '../.env';
require('dotenv').config(dotEnvOptions);

let CONFIG = {
    api_port                    : process.env.API_PORT                  || 3000,

    db_username                 : process.env.MYSQL_USERNAME            || 'root',
    db_dialect                  : process.env.MYSQL_DIALECT             || 'mysql',
    db_password                 : process.env.MYSQLPASSWORD             || 'root',
    db_database                 : process.env.MYSQL_DATABASE            || 'online-flea-market',
    db_host                     : process.env.MYSQL_HOST                || 'mysql',
    jwt_token                   : process.env.JWT_SECRET                || 'secret'

};

module.exports = CONFIG;
