const express = require('express');
const router = express.Router();
const controller = require('../controllers/participantController')

router.post('/', controller.save);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:id', controller.find);
router.get('/', controller.findAll);

module.exports = router;