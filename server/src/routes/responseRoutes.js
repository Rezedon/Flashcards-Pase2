const responseRouter = require('express').Router();
const ResponceController = require('../Controller/responceController');

responseRouter.get(
  '/cards/:themeId/response/:questionId',
  ResponceController.getResFromOneQest,
);
