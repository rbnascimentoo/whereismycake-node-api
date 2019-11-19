const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  /*type: {
    enum: ["Baby", "Birthday", "Comum", "Torta", "Brownie"],
  },*/
  price: {
      type: Number
  }
});

module.exports = mongoose.model('Cake', schema);