const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  data: {
    type: Date,
    required: true
  },
  rodada: {
    type: Number,
    required: true
  },
  numeroSorteio: {
    type: Number,
    required: true
  },
  participanteId: {
      type: String,
      required: true
  },
  cakeId: {
    type: String,
    required: true
}
});

module.exports = mongoose.model('Sorteio', schema);
