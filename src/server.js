'use strict';

const express = require('express');
const app = express();

const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const clothesRoute = require('./routes/clothes.js');
const foodRoute = require('./routes/food.js');

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/mydatabase';
const options = { useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(MONGODB_URI, options);


const PORT = process.env.PORT || 3333; 

app.use(express.json());
app.use(clothesRoute);
app.use(foodRoute);
app.use(logger);
app.use('*', notFound);

app.use(errors);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`listening on ${port}`)

    });
  }
}

