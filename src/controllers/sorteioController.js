const mongoose = require('mongoose');
const Sorteio = mongoose.model('Sorteio');

exports.post = async (req, res, next) => {
    try {
        const sorteio = new Sorteio({
          data: req.body.data,
          rodada: req.body.rodada,
          numeroSorteio: req.body.numeroSorteio,
          participanteId: req.body.participante._id
        });
    
        await sorteio.save();
    
        res.status(201).send({message: 'Sorteio cadastrada com sucesso!'});
      } catch (e) {
        res.status(500).send({message: 'Falha ao cadastrar a sorteio.'});
      
    };
};

exports.getall = async (req, res, next) => {
    try {
        const data = await Sorteio.find({});
        res.status(200).send(data);
      } catch (e) {
        res.status(500).send({message: 'Falha ao carregar as sorteios.'});
    };
};