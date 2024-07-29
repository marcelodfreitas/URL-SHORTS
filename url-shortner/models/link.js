const Sequelize = require('sequelize');
const database = require('../db');

const Link = database.define('link',{
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
    code: {
       type: Sequelize.STRING,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hits: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0,
        allowNull: false
    }
    
})

module.exports = Link;