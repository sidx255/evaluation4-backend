'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_fields extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // belongs to content
      content_fields.belongsTo(models.collection, {
        foreignKey: 'collection_id',
      });

    }
  }
  content_fields.init({
    field_id: DataTypes.INTEGER,
    collection_id: DataTypes.INTEGER,
    fields: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'content_fields',
  });
  return content_fields;
};