const ResponseService = require('../servises/responceServis');

class ResponceController {
  static async getResFromOneQest(req, res) {
    try {
      const { questionId, themeId } = req.params;

      const ArrRes = await ResponseService.getOne({ themeId, questionId });
      res.status(200).json(ArrRes);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = ResponceController;
