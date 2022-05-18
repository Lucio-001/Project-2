const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quotes extends Model {
  static upvote(body, models) {
    return models.Upvote.create({
      user_id: body.user_id,
      quotes_id: body.quotes_id
    }).then(() => {
      return Quotes.findOne({
        where: {
          id: body.quotes_id
        },
        attributes: [
          'id',
          "author",
          "text",
          [sequelize.literal('(SELECT COUNT(*) FROM upvote WHERE quotes.id = upvote.quotes_id)'), 'upvote_count']
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_text', 'quotes_id', 'user_id'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

Quotes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'quotes'
  }
);

module.exports = Quotes;