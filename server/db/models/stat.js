'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme, User }) {
      this.belongsTo(Theme, { foreignKey: 'themeId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Stat.init(
    {
      score: DataTypes.INTEGER,
      themeId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Stat',
    },
  );
  return Stat;
};
