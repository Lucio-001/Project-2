const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class ThumbsUp extends Model {}

ThumbsUp.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    quote_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "quote",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "thumbsUp",
  }
);

module.exports = ThumbsUp;
