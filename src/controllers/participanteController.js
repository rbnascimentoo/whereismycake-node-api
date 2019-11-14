const mongoose = require('mongoose');
const Participante = mongoose.model('Participante');

exports.post = async (req, res, next) => {
    try {
        const participante = new Participante({
          nome: req.body.nome,
          apelido: req.body.apelido
        });
    
        await participante.save();
    
        res.status(201).send({message: 'Participante cadastrada com sucesso!'});
      } catch (e) {
        res.status(500).send({message: 'Falha ao cadastrar a participante.'});
      
    };
};

exports.put = async (req, res, next) => {
    try {
        const participante = new Participante({
          _id: req.params.id,
          nome: req.body.nome,
          apelido: req.body.apelido
        });
    
        await participante.update(participante);
    
        res.status(202).send({message: 'Participante atualizado com sucesso!'});
      } catch (e) {
        res.status(500).send({message: 'Falha ao atualizar o participante.'});
      
    };
};

exports.delete = async (req, res, next) => {
    try {
        const data = await Participante.findByIdAndRemove(req.params.id);
        res.status(204).send(data);
      } catch (e) {
        res.status(500).send({message: 'Falha ao carregar as menções.'});
    };
};

exports.get = async (req, res, next) => {
    try {
      const data = await Participante.findById(req.params.id);
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({message: 'Falha ao carregar as participante.'});
  };
};

exports.getall = async (req, res, next) => {
    try {
        const data = await Participante.find({});
        res.status(200).send(data);
      } catch (e) {
        res.status(500).send({message: 'Falha ao carregar as participantes.'});
    };
};