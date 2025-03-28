const { formatResponse } = require('../utils/formatResponce');

const CardService = require('../servises/Cards.Service');


class CardController {
  static async getAll(req, res) {
    try {
      const result = await CardService.getAllCards();
      res.status(200).json(formatResponse({
        statusCode: 200,
        message: 'Все карты из БД.',
        data: result,
      }))
    } catch (error) {
      console.log('Ошибка получения', error);
      res.status(500).json(formatResponse({
        statusCode: 500,
        message: 'Ошибка получения',
        error: 'Ошибка получения всех карточек',
      }))
    }
  }
}

module.exports = CardController;
