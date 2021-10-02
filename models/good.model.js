const { DataTypes } = require('sequelize');

const { sequelize } = require('../utils/initDb');

const Good = sequelize.define('good', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: DataTypes.STRING,
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
})

module.exports = Good;