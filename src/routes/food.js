'use strict'

const express = require('express');

let MongoWrapper = require('../models/data-collection-class.js');
let foodSchema = require('../models/food.js');

// console.log('mongowrapppp...', MongoWrapper)
// console.log('foodschema...', foodSchema);

const food = new MongoWrapper(foodSchema);
// console.log('food....', food.model);

const foodRouter = express.Router();

foodRouter.get('/food', getAllFood);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', createFood);
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);

async function getOneFood (req, res) {
  let id =  req.params.id;
  // console.log(id);
  let item = await food.get(id);
  res.status(200).send(item);
}


async function getAllFood (req, res) {
  let all = await food.get();
  res.status(200).send(all);
}


async function createFood (req, res) {
  let obj = req.body;
  console.log('obj...', obj);
  let newFood = await food.create(obj);
  console.log('newfood...', newFood);
  res.status(201).send(newFood);
}

async function updateFood (req, res) {
  let id = req.params.id;
  let content = req.body;
  let updated = await food.update(id, content);
  res.status(200).send(updated);
}

async function deleteFood (req, res) {
  let id = req.params.id;
  // console.log('deleted id', id)
  let removed = await food.delete(id);
  // console.log('removed...', removed);
  res.status(200).send(removed)
}

module.exports = foodRouter;