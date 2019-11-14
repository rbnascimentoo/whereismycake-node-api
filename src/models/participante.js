const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  apelido: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Participante', schema);
