const mongoose = require('mongoose');
const Participant = mongoose.model('Participant');

exports.save = async (req, res, next) => {
    try {
        const participant = new Participant({
          name: req.body.name,
          nickname: req.body.nickname
        });

        await participant.save();
    
        res.status(201).send({message: 'Participant saved sucess!'});
      } catch (e) {
        res.status(500).send({message: 'Fail to save participant.'});
      
    };
};

exports.update = async (req, res, next) => {
    try {
        const participant = new Participant({
          _id: req.params.id,
          name: req.body.name,
          nickname: req.body.nickname
        });
    
        await participant.update(participant);
    
        res.status(202).send({message: 'Participant updated sucess!'});
      } catch (e) {
        res.status(500).send({message: 'Fail to update participant.'});
      
    };
};

exports.delete = async (req, res, next) => {
    try {
        const data = await Participant.findByIdAndRemove(req.params.id);
        res.status(204).send(data);
      } catch (e) {
        res.status(500).send({message: 'Fail to delete participants.'});
    };
};

exports.find = async (req, res, next) => {
    try {
      const data = await Participant.findById(req.params.id);
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({message: 'Fail to load participant.'});
  };
};

exports.findAll = async (req, res, next) => {
  
    try {
        const data = await Participant.find({});

        res.status(200).send(data);
      } catch (e) {
        res.status(500).send({message: 'Fail to load participants.'});
    };
};