const { Router } = require("express");
const Category = require("../models/category.model");
const Good = require("../models/good.model");

const router = Router();

router.get('/', async (req, res, next) => {
    const goods = await Good.findAll({
        include: {
            model: Category,
            as: 'category',
            attributes: ['name']
        }
    });

    res.status(200).json({ goods })
})

module.exports = router;