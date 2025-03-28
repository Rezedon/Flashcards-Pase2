'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const answerOptions = [
      { response: ['Паразиты', '1917', 'Джокер', 'Однажды в Голливуде'], questionId: 1 },
      {
        response: ['Леонардо ДиКаприо', 'Брэд Питт', 'Джонни Депп', 'Том Хэнкс'],
        questionId: 2,
      },
      {
        response: [
          'Фрэнсис Форд Коппола',
          'Мартин Скорсезе',
          'Квентин Тарантино',
          'Стэнли Кубрик',
        ],
        questionId: 3,
      },
      { response: ['1994', '1990', '1985', '2000'], questionId: 4 },
      { response: ['Лэсси', 'Белль', 'Тото', 'Линди'], questionId: 5 },

      {
        response: [
          'Bohemian Rhapsody',
          'We Will Rock You',
          'Another One Bites the Dust',
          'I Want to Break Free',
        ],
        questionId: 6,
      },
      {
        response: ['Ed Sheeran', 'Sam Smith', 'Taylor Swift', 'Bruno Mars'],
        questionId: 7,
      },
      {
        response: ['Мик Джаггер', 'Кит Ричардс', 'Ронни Вуд', 'Чарли Уотс'],
        questionId: 8,
      },
      { response: ['Майкл Джексон', 'Принс', 'Мадонна', 'Уитни Хьюстон'], questionId: 9 },
      {
        response: ['Yesterday', 'Hey Jude', 'Let It Be', 'Come Together'],
        questionId: 10,
      },

      {
        response: [
          'В Африке и Азии',
          'На Ближнем Востоке',
          'В Южной Америке',
          'В Австралии',
        ],
        questionId: 11,
      },
      { response: ['Пятна', 'Полосы', 'Клетки', 'Лепестки'], questionId: 12 },
      {
        response: ['Да', 'Нет', 'Только по маленьким деревьям', 'Только если вынуждены'],
        questionId: 13,
      },
      { response: ['58 км/ч', '40 км/ч', '72 км/ч', '80 км/ч'], questionId: 14 },
      { response: ['Мясо', 'Растения', 'Фрукты', 'Вода и соль'], questionId: 15 },

      {
        response: ['В Кавказской', 'В Альпийской', 'В Гималайской', 'В Пиренейской'],
        questionId: 16,
      },
      { response: ['2', '1', '3', '4'], questionId: 17 },
      { response: ['5642 м', '4807 м', '6995 м', '8848 м'], questionId: 18 },
      { response: ['Россия', 'США', 'Канада', 'Китай'], questionId: 19 },
      { response: ['Лето', 'Зима', 'Весна', 'Осень'], questionId: 20 },

      { response: ['Оптическое явление', 'Звук', 'Запах', 'Ультразвук'], questionId: 21 },
      {
        response: [
          'Из-за рассеивания солнечного света',
          'Из-за морской воды',
          'Из-за загрязнения воздуха',
          'Из-за орбитальных спутников',
        ],
        questionId: 22,
      },
      {
        response: [
          'Томас Эдисон',
          'Никола Тесла',
          'Александр Грэм Белл',
          'Джордж Вашингтон',
        ],
        questionId: 23,
      },
      { response: ['Юпитер', 'Земля', 'Марс', 'Венера'], questionId: 24 },
      {
        response: [
          'Твердое, жидкое, газообразное',
          'Жидкое, газообразное, светящееся',
          'Плазменное, жидкое, твердое',
          'Электрическое, жидкое, твердое',
        ],
        questionId: 25,
      },

      { response: ['Красная', 'Синяя', 'Желтая', 'Зеленая'], questionId: 26 },
      {
        response: ['Молния МакКуин', 'Капитан Америка', 'Тони Старк', 'Халк'],
        questionId: 27,
      },
      { response: ['Бэмби', 'Тотошка', 'Симба', 'Кристоф'], questionId: 28 },
      { response: ['Крокодил', 'Заяц', 'Лисичка', 'Волк'], questionId: 29 },
      { response: ['Симба', 'Шрам', 'Муфаса', 'Нала'], questionId: 30 },
    ];

    await queryInterface.bulkInsert('Responses', answerOptions, {});
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
