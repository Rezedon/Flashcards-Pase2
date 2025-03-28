const indexRoutes = require('express').Router();

const cardsRoutes = require('./cardsRoutes');
const questionRouter = require('./questionRoutes');

const { formatResponse } = require('../utils/formatResponce');

indexRoutes.use('/api', cardsRoutes);
indexRoutes.use('/api', questionRouter);
indexRoutes.use('/api', responseRouter);

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
