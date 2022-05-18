const User = require('./User');
const Like = require('./Like');
const Comment = require('./Comment');
const Quotes = require('./Quotes');

User.hasMany(Quotes, {
  foreignKey: 'user_id'
});

Quotes.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Quotes, {
  through: Like,
  as: 'liked_quotes',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Quotes.belongsToMany(User, {
  through: Like,
  as: 'liked_quotes',
  foreignKey: 'quotes_id',
  onDelete: 'SET NULL'
});

Like.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Like.belongsTo(Quotes, {
  foreignKey: 'quotes_id',
  onDelete: 'SET NULL'
});

User.hasMany(Like, {
  foreignKey: 'user_id'
});

Quotes.hasMany(Like, {
  foreignKey: 'quotes_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Quotes, {
  foreignKey: 'quotes_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Quotes.hasMany(Comment, {
  foreignKey: 'quotes_id'
});

module.exports = { User, Quotes, Like, Comment };
