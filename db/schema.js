const mongoose = require('mongoose');

const detailedSchema = new mongoose.Schema({
  _index: {type: Number},
  name: {type: String},
  address: {type: String},
  price: {type: Number},
  body: {type: String},
  subTitle: {type: String},
  ff_type: {type: String},
  ff_yearBuilt: {type: Number},
  ff_heating: {type: String},
  ff_cooling: {type: String},
  ff_parking: {type: String},
  ff_lot: {type: String},
  ff_daysOnZillow: {type: Date},
  ff_pricePerSqft: {type: Number},
  ff_saves: {type: Number},
});

module.exports = detailedSchema;
