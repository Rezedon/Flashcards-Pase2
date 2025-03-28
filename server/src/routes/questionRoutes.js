const questionRouter = require('express').Router();

const QuestionController = require('../Controller/questionController');

questionRouter.get('/cards/:themeId', QuestionController.getAllQestion);

module.exports = questionRouter;
