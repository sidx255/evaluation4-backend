'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // one to many relationship with collection and content

      // 1:N relationship with content
      collection.hasMany(models.content, {
        foreignKey: 'collection_id',
        as: 'content',
        sourceKey: 'collection_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      // 1:a relationship with content_fields
      collection.hasOne(models.content_fields, {
        foreignKey: 'collection_id',
        as: 'content_fields',
        sourceKey: 'collection_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });



      // collection.hasMany(models.content, {

      // foreignKey: 'collection_id',
      // sourceKey: 'collection_id',
      // as

      // onDelete: 'CASCADE',
      // onUpdate: 'CASCADE'
      // });

    }
  }
  collection.init({
    collection_id: DataTypes.INTEGER,
    collection_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'collection',
  });
  return collection;
};