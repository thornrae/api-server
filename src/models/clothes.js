'use strict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  brand: {type: String, required: true},
  size: {type: String, required: true, enum: ['Small', 'Med', 'Large']},
  type: {type: String, required: true}
})

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;
