const express = require('express');
const router = express.Router();
const controller = require('../controllers/sorteioController')

router.post('/', controller.post);
router.get('/', controller.getall);

module.exports = router;