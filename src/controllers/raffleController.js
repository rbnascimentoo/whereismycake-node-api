const mongoose = require('mongoose');
const Raffle = mongoose.model('Raffle');

exports.save = async (req, res, next) => {
    try {
        const raffle = new Raffle({
          date: req.body.date,
          rodada: req.body.rodada,
          numberRaffle: req.body.numberRaffle,
          participantId: req.body.participantId,
          cakeId: req.body.cakeId
        });

        console.log(raffle);

        await raffle.save();
    
        res.status(201).send({message: 'raffle has save sucess!'});
      } catch (e) {
        res.status(500).send({message: 'Fail to save raffle.'});
      
    };
};

exports.findAll = async (req, res, next) => {
    try {
        const data = await Raffle.find({})
        //.maxScan(rodada)
        .populate('participantId')
        .populate('cakeId')
        .sort({numberSortition: -1});

        console.log(data);

        res.status(200).send(data);
      } catch (e) {
        res.status(500).send({message: 'Fail to load raffles.'});
    };
};

exports.delete = async (req, res, next) => {
  try {
      const data = await Raffle.findByIdAndRemove(req.params.id);
      res.status(204).send(data);
    } catch (e) {
      res.status(500).send({message: 'Fail to delete raffle.'});
  };
};