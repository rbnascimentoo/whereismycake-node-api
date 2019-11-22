const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  date: {
    type: Date,
    required: true
  },
  rodada: {
    type: Number,
    required: true
  },
  numberSortition: {
    type: Number,
    required: true
  },
  participantId: {
      type: Schema.ObjectId,
      required: true,
      ref: 'Participant' 
  },
  cakeId: {
    type: Schema.ObjectId,
    required: true,
    ref: 'Cake'
}
});

module.exports = mongoose.model('Sortition', schema);
