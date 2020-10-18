var express = require('express');
var router = express.Router();
var exchangeController = require('../controllers/exchange')


router.get('/:id', exchangeController.getExchange);
router.get('/', exchangeController.getExchange);
router.post('/', exchangeController.createExchange);
router.patch('/:id', exchangeController.updateExchange); // patch is request update
router.delete('/:id', exchangeController.deleteExchange);

module.exports = router;