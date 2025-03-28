'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questions = [
      { question: 'Какой фильм получил Оскар за лучший фильм в 2020 году?', themeId: 1 },
      { question: "Кто играет главную роль в фильме 'Титаник'?", themeId: 1 },
      { question: "Какой режиссер снял фильм 'Крестный отец'?", themeId: 1 },
      { question: "В каком году вышел фильм 'Побег из Шоушенка'?", themeId: 1 },
      {
        question: 'Как называется фильм о коллице, потерявшейся и вернувшейся домой?',
        themeId: 1,
      },

      { question: 'Как называется знаменитая песня группы Queen?', themeId: 2 },
      { question: "Кто поет песню 'Shape of You'?", themeId: 2 },
      { question: 'Какой инструмент играет Солист The Rolling Stones?', themeId: 2 },
      { question: "Кто исполнил песню 'Thriller'?", themeId: 2 },
      { question: 'Назовите песню The Beatles, написанную Полом Маккартни', themeId: 2 },

      { question: 'Где живут леопарды?', themeId: 3 },
      { question: 'Какой узор на шкуре у леопарда?', themeId: 3 },
      { question: 'Могут ли леопарды лазать по деревьям?', themeId: 3 },
      { question: 'Какая скорость у леопарда при беге?', themeId: 3 },
      { question: 'Чем питаются леопарды?', themeId: 3 },

      { question: 'На какой горной системе расположен Эльбрус?', themeId: 4 },
      { question: 'Сколько вершин у Эльбруса?', themeId: 4 },
      { question: 'Какова высота западной вершины Эльбруса?', themeId: 4 },
      { question: 'В какой стране находится Эльбрус?', themeId: 4 },
      {
        question: 'Какое время года самое подходящее для восхождения на Эльбрус?',
        themeId: 4,
      },

      { question: 'Что такое радуга?', themeId: 5 },
      { question: 'Почему небо голубое?', themeId: 5 },
      { question: 'Кто изобрел лампочку?', themeId: 5 },
      {
        question: 'Какая планета является самой большой в нашей Солнечной системе?',
        themeId: 5,
      },
      { question: 'Каковы три состояния воды?', themeId: 5 },

      { question: "Какого цвета машинка Наф-Нафа в 'Трех поросятах'?", themeId: 6 },
      { question: "Как зовут главного героя мультфильма 'Тачки'?", themeId: 6 },
      { question: 'Как зовут олененка из одноименного мультфильма?', themeId: 6 },
      {
        question: "Как зовут друга Слоненка в мультфильме 'Слоненок идет учиться'?",
        themeId: 6,
      },
      { question: "Как зовут главного героя мультфильма 'Король Лев'?", themeId: 6 },
    ];

    await queryInterface.bulkInsert('Questions', questions, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
