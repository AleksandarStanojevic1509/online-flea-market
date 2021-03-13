const { DataTypes }             = require('sequelize');
const sequelize                 = require('../services/databaseConnection');


const User = sequelize.define('User',
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        firstName:{
            type: DataTypes.STRING
        },
        lastName:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING,
            unique: true
        },
        isAdmin:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, 
    {
        paranoid: true
    }
)

module.exports = User;