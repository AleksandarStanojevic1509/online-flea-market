const { Sequelize }             = require('sequelize');
const CONFIG                    = require('../config');

module.exports  = new Sequelize(CONFIG.db_database, CONFIG.db_username, CONFIG.db_password, {
    host: CONFIG.db_host,
    dialect: CONFIG.db_dialect,
});

