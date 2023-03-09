'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // belongs to collection
      content.belongsTo(models.collection, {
        foreignKey: 'collection_id',
      });

      // 1 to 1 relationship with content_fields
      content.hasOne(models.content_fields, {
        foreignKey: 'content_id',
        as: 'content_fields',
        sourceKey: 'content_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  content.init({
    collection_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    values: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'content',
  });
  return content;
};