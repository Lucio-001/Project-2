const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Quote extends Model {
  static thumbsUp(body, models) {
    return models.ThumbsUp.create({
      user_id: body.user_id,
      quote_id: body.quote_id,
    }).then(() => {
      return Quote.findOne({
        where: {
          id: body.quote_id,
        },
        attributes: [
          "id",
          "author",
          "text",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM thumbsUp WHERE quote.id = thumbsUp.quote_id)"
            ),
            "thumbsUp_count",
          ],
        ],
        include: [
          {
            model: models.Comment,
            attributes: ["id", "comment_text", "quote_id", "user_id"],
            include: {
              model: models.User,
              attributes: ["username"],
            },
          },
        ],
      });
    });
  }
}

Quote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    text: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "quote",
  }
);

module.exports = Quote;
