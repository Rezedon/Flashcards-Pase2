const indexRoutes = require('express').Router();

const cardsRoutes = require('./cardsRoutes');

const { formatResponse } = require('../utils/formatResponce');

indexRoutes.use('/api/cards/', cardsRoutes);

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
