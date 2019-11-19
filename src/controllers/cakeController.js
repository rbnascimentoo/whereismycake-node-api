const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');

exports.post = async (req, res, next) => {
    try {
        const cake = new Cake({
          name: req.body.name,
          description: req.body.description,
          //type: req.body.type,
          price: req.body.price
        });
    
        await cake.save();
    
        res.status(201).send({message: 'Cake cadastrada com sucesso!'});
      } catch (e) {
        res.status(500).send({message: 'Falha ao cadastrar a cake.'});
      
    };
};

exports.put = async (req, res, next) => {
    try {
        const cake = new Cake({
          _id: req.params.id,
          name: req.body.name,
          //type: req.body.type,
          description: req.body.description,
          price: req.body.price
        });
    
        await cake.update(cake);
    
        res.status(202).send({message: 'Cake atualizado com sucesso!'});
      } catch (e) {
        res.status(500).send({message: 'Falha ao atualizar o Cake.'});
      
    };
};

exports.delete = async (req, res, next) => {
    try {
        const data = await Cake.findByIdAndRemove(req.params.id);
        res.status(204).send(data);
      } catch (e) {
        res.status(500).send({message: 'Falha ao carregar as Cake.'});
    };
};

exports.get = async (req, res, next) => {
    try {
      const data = await Cake.findById(req.params.id);
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({message: 'Falha ao carregar as Cake.'});
  };
};

exports.getall = async (req, res, next) => {
    try {
        const data = await Cake.find({});
        res.status(200).send(data);
      } catch (e) {
        res.status(500).send({message: 'Falha ao carregar as Cake.'});
    };
};