const express = require('express');
const router = express.Router();
const controller = require('../controllers/sortitionController')

router.post('/', controller.save);
router.get('/', controller.findAll);
router.delete('/:id', controller.delete);

module.exports = router;