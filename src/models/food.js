'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: {type: String, required: true},
  calories: {type: Number, required: true},
  type: {type: String, required: true, enum: ['SWEET', 'SAVORY']}
})

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel; 