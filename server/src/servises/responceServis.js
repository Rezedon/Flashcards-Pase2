const { Response } = require('../../db/models');

class ResponseService {
  static async getOne({ themeId, questionId }) {
    const ArrResForOneQest = await Response.findOne({
      where: {
        themeId,
        questionId,
      },
    });
    console.log(questionId, themeId);
    return ArrResForOneQest;
  }
}
module.exports = ResponseService;
