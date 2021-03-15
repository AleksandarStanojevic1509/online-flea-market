let dotEnvOptions = {};
dotEnvOptions.path = '../.env';
require('dotenv').config(dotEnvOptions);

let CONFIG = {
    api_port                    : process.env.API_PORT                  || 3000,

    db_username                 : process.env.MYSQL_USERNAME            || 'root',
    db_dialect                  : process.env.MYSQL_DIALECT             || 'mysql',
    db_password                 : process.env.MYSQL_PASSWORD            || 'root',
    db_database                 : process.env.MYSQL_DATABASE            || 'online-flea-market',
    db_host                     : process.env.MYSQL_HOST                || 'mysql',
    redis_password              : process.env.REDIS_PASSWORD            || 'root',
    redis_host                  : process.env.REDIS_HOST                || 'redis',
    redis_port                  : process.env.REDIS_PORT                || 6379,

    jwt_token                   : process.env.JWT_SECRET

};

module.exports = CONFIG;
