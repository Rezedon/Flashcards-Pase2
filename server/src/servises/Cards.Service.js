const { Theme } = require('../../db/models');

class CardsService {

  static async getAllCards() {
    const cards = await Theme.findAll();
    const result = cards.map((el) => el.get({ plain: true }));
    return result;
  }
}

module.exports = CardsService;
