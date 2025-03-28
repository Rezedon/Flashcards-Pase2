'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const themes = [
      {
        title: 'Кино',
        url: 'https://i.pinimg.com/originals/99/93/84/999384b4e9087cf26ef125cc2b73602c.jpg',
      },
      {
        title: 'Музыка',
        url: 'https://i.pinimg.com/originals/86/72/e7/8672e724263fdb098fec9afd1cc49f79.png',
      },
      {
        title: 'Леопарды',
        url: 'https://cdn.yjc.ir/files/fa/news/1399/10/6/13174653_344.jpg',
      },
      {
        title: 'Эльбрус',
        url: 'https://a.d-cd.net/uR2kHAe8bFb-heMGe-hamOaou-M-1920.jpg',
      },
      {
        title: 'Разное',
        url: 'https://www.piupiuflowers.pl/userdata/public/gfx/e127e1d7e6629f6b2fabb965894d36f7.jpg',
      },
      {
        title: 'Мультики',
        url: 'https://i.pinimg.com/originals/ef/27/62/ef2762237e1d5f03dfd98b7730fa2cb4.jpg',
      },
    ];
    await queryInterface.bulkInsert('Themes', themes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
