'use strict';

// let foodModel = require('./food.js');

class Collection {
  constructor(model) {
  this.model = model;
  this.db = []
 }

 get(_id) {
   if(_id) {
     let showone = this.model.findOne( {_id})
     return showone;
   } else {
     let showdb =  this.model.find({ })
     return showdb;
   }
 }

 create(record) {
   console.log('record..', record)
   let newRecord = new this.model(record);
   console.log('newrecord..', newRecord)
   return newRecord.save()
 }

 update(_id, record) {
   return this.model.findByIdAndUpdate(_id, record, { new: true})
 }

 delete(_id) {
   return this.model.findByIdAndDelete(_id);
 }
}

module.exports = Collection;