const indexRoutes = require('express').Router();

const cardsRoutes = require('./cardsRoutes');
// const mainRouter = require('./main.router');

const { formatResponse } = require('../utils/formatResponce');

indexRoutes.use('/api', cardsRoutes);
// indexRouter.use('/', mainRouter);

indexRoutes.get('*', (req, res) => {
  res.status(404).json(
    formatResponse({
      statusCode: 404,
      message: 'Страница не найдена',
      error: 'Ресурс по такому URL не найден.',
    }),
  );
});

module.exports = indexRoutes;


