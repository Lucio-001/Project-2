const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Dislike extends Model {}

Dislike.init(
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
    quotes_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "quotes",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "dislike",
  }
);

module.exports = Dislike;