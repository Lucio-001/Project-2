const User = require('./User');
const Upvote = require('./Upvote');
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
  through: Upvote,
  as: 'upvoted_quotes',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Quotes.belongsToMany(User, {
  through: Upvote,
  as: 'upvoted_quotes',
  foreignKey: 'quotes_id',
  onDelete: 'SET NULL'
});

Upvote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Upvote.belongsTo(Quotes, {
  foreignKey: 'quotes_id',
  onDelete: 'SET NULL'
});

User.hasMany(Upvote, {
  foreignKey: 'user_id'
});

Quotes.hasMany(Upvote, {
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

module.exports = { User, Quotes, Upvote, Comment };
