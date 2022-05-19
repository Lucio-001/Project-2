const User = require("./User");
const ThumbsUp = require("./ThumbsUp");
const Comment = require("./Comment");
const Quote = require("./Quote");

User.hasMany(Quote, {
  foreignKey: "user_id",
});

Quote.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.belongsToMany(Quote, {
  through: ThumbsUp,
  as: "thumbsUp_quotes",

  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Quote.belongsToMany(User, {
  through: ThumbsUp,
  as: "thumbsUp_quotes",
  foreignKey: "quote_id",
  onDelete: "SET NULL",
});

ThumbsUp.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

ThumbsUp.belongsTo(Quote, {
  foreignKey: "quote_id",
  onDelete: "SET NULL",
});

User.hasMany(ThumbsUp, {
  foreignKey: "user_id",
});

Quote.hasMany(ThumbsUp, {
  foreignKey: "quote_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Quote, {
  foreignKey: "quote_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Quote.hasMany(Comment, {
  foreignKey: "quote_id",
});

module.exports = { User, Quote, ThumbsUp, Comment };
