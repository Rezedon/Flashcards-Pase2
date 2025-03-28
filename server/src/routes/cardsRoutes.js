const cardsRouter = require('express').Router();

const CardController = require('../Controller/cardsController');

cardsRouter.get('/cards', CardController.getAll);


module.exports = cardsRouter;
