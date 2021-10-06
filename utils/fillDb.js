const Category = require("../models/category.model")
const Good = require("../models/good.model")
const { sequelize } = require('./initDb')

module.exports = async () => {
    await sequelize.dropAllSchemas();
    await sequelize.sync();

    await Category.bulkCreate([
        {
            name: 'Мягкие игрушки'
        },
        {
            name: 'Развивающие игрушки'
        }
    ])

    // создаешь товары
    await Good.bulkCreate([
        {
            name: 'Слоник',
            description: 'мягчайший слоник',
            image: null,
            cost: 100,
            categoryId: 1
        },
        
    ])
}