const mongoose = require('mongoose');
const Sortition = mongoose.model('Sortition');
const Participant = mongoose.model('Participant');

exports.save = async (req, res, next) => {
    try {
        const sortition = new Sortition({
          date: req.body.date,
          rodada: req.body.rodada,
          numberSortition: req.body.numberSortition,
          participantId: req.body.participantId,
          cakeId: req.body.cakeId
        });

        await sortition.save();
    
        res.status(201).send({message: 'Sortition has save sucess!'});
      } catch (e) {
        res.status(500).send({message: 'Fail to save Sortition.'});
      
    };
};

exports.findAll = async (req, res, next) => {
    try {
        const data = await Sortition.find({})
        //.maxScan(rodada)
        .populate('participantId')
        .populate('cakeId')
        .sort({numberSortition: -1});

        console.log(data);

        res.status(200).send(data);
      } catch (e) {
        res.status(500).send({message: 'Fail to load Sortitions.'});
    };
};

exports.delete = async (req, res, next) => {
  try {
      const data = await Sortition.findByIdAndRemove(req.params.id);
      res.status(204).send(data);
    } catch (e) {
      res.status(500).send({message: 'Fail to delete sortition.'});
  };
};