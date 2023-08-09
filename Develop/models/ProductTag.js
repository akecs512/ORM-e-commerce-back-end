const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
   category_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
