const { DataTypes }             = require('sequelize');
const sequelize                 = require('../services/databaseConnection');


const Product = sequelize.define('Product', 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.INTEGER
        },
        category:{
            type: DataTypes.STRING
        }
    },
    {
        paranoid: true
    }
)


module.exports = Product;
