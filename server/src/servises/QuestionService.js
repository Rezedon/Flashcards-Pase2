const { Question } = require('../../db/models');

class QuestionServise {
  static async getAll({ themeId }) {
    console.log(themeId);
    const allQuestions = await Question.findAll({ where: { themeId } });
    const result = allQuestions.map((el) => el.get({ plain: true }));
    console.log(result);
    return result;
  }
}

module.exports = QuestionServise;
