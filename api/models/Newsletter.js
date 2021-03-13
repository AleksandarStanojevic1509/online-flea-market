const { DataTypes }             = require('sequelize');
const sequelize                 = require('../services/databaseConnection');


const Newsletter = sequelize.define('Newsletter', 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    },
    {
        paranoid: true
    }
)


module.exports = Newsletter;
