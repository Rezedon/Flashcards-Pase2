const QuestionServise = require('../servises/QuestionService');
// const path = require('path');

class QuestionController {
  static async getAllQestion(req, res) {
    try {
      const { themeId } = req.params;
      const questions = await QuestionServise.getAll({ themeId });
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = QuestionController;
