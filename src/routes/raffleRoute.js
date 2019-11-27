const express = require('express');
const router = express.Router();
const controller = require('../controllers/raffleController')

router.post('/', controller.save);
router.get('/', controller.findAll);
router.delete('/:id', controller.delete);

module.exports = router;