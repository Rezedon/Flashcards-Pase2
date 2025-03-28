'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Question, Stat }) {
      this.hasMany(Question, { foreignKey: 'themeId' });
      this.hasMany(Stat, { foreignKey: 'themeId' });
    }
  }
  Theme.init(
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Theme',
    },
  );
  return Theme;
};
