const mongoose = require('mongoose');
const Sorteio = mongoose.model('Sorteio');
const Participante = mongoose.model('Participante');

exports.post = async (req, res, next) => {
    try {
        const sorteio = new Sorteio({
          data: req.body.data,
          rodada: req.body.rodada,
          numeroSorteio: req.body.numeroSorteio,
          participanteId: req.body.participante._id,
          cakeId: req.body.cake._id
        });
    
        await sorteio.save();
    
        res.status(201).send({message: 'Sorteio cadastrada com sucesso!'});
      } catch (e) {
        res.status(500).send({message: 'Falha ao cadastrar a sorteio.'});
      
    };
};

exports.getall = async (req, res, next) => {
    try {
        const data = await Sorteio.find({}).sort({numeroSorteio: -1});

        console.log(data);

        res.status(200).send(data);
      } catch (e) {
        res.status(500).send({message: 'Falha ao carregar as sorteios.'});
    };
};