const { DataTypes } = require('sequelize');

const Good = require('./good.model');
const { sequelize } = require('../utils/initDb');

const Category = sequelize.define('category', {
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
})

Category.hasMany(Good, {
    sourceKey: "id",
    foreignKey: "categoryId",
    as: 'goods'
})
Good.belongsTo(Category, {
    foreignKey: "categoryId",
    as: 'category'
})

module.exports = Category;