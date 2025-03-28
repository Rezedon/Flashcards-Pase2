'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question, Theme }) {
      this.belongsTo(Question, { foreignKey: 'questionId' });
      this.belongsTo(Theme, { foreignKey: 'themeId' });
    }
  }
  Response.init(
    {
      response: DataTypes.ARRAY(DataTypes.STRING),
      questionId: DataTypes.INTEGER,
      themeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Response',
    },
  );
  return Response;
};
