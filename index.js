'use strict';

const server = require('./src/server');
server.start(3333);

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/mydatabase';
const options = { useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(MONGODB_URI, options);




