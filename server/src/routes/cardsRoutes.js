const cardsRouter = require('express').Router();

const CardController = require('../Controller/cardsController');
const QuestionController = require('../Controller/questionController');
const ResponceController = require('../Controller/responceController');

cardsRouter
  .get('/', CardController.getAll)
  .get('/:themeId', QuestionController.getAllQestion)
  .get('/:themeId/response/:questionId', ResponceController.getResFromOneQest);

module.exports = cardsRouter;
