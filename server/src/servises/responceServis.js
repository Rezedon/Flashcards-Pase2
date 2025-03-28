const { Response } = require('../../db/models');

class ResponseService {
  static async getOne({ questionId }) {
    const ArrResForOneQest = await Response.findOne({ questionId });
    return ArrResForOneQest;
  }
}
module.exports = ResponseService;
