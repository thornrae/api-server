'use strict'

const express = require('express');

let MongoWrapper = require('../models/data-collection-class');
let clothesDB = require('../models/clothes.js');

const clothes = new MongoWrapper(clothesDB);

const clothesRouter = express.Router();

clothesRouter.get('/clothes', getAllClothes);
clothesRouter.get('clothes/:id', getOneClothes);
clothesRouter.post('/clothes', createClothes);
clothesRouter.put('/clothes/:id', updateClothes);
clothesRouter.delete('/clothes/:id', deleteClothes);

async function getOneClothes (req, res){
  let id = req.params.id;
  let item = await clothes.get(id);
  res.status(200).send(item);
}

async function getAllClothes (req, res) {
  let all = await clothes.get();
  res.status(200).send(all);
}

async function createClothes (req, res) {
  let obj = req.body;
  let newClothes = await clothes.create(obj);
  res.status(201).send(newClothes);
}

async function updateClothes (req, res) {
  let id = req.params.id;
  let content = req.body;
  let updated = await clothes.update(id, content);
  res.status(200).send(updated);
}

async function deleteClothes (req, res){
  let id = req.params.id;
  let removed = await clothes.delete(id);
  res.status(200).send(removed);
}

module.exports = clothesRouter;

