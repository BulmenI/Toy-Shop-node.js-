const express = require('express');
const bodyParser = require('body-parser');

const Good = require('./models/good.model')
const Category = require('./models/category.model')
const { sequelize } = require('./utils/initDb');
const goodsRouter = require('./routes/goods.router');
const fillDb = require('./utils/fillDb');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
})

app.use(bodyParser.json({ limit: '5mb' }))

app.use('/goods', goodsRouter);

fillDb().then(() => {
  app.listen(8000, (error) => {
    console.log(error || 'ku');
  })
})