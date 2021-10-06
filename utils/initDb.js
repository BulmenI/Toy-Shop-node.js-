const { Sequelize } = require('sequelize');

module.exports = { sequelize: new Sequelize("market", 'root', '123456789', { dialect: 'mysql', host: 'localhost' }) }