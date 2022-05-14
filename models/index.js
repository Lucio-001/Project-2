const User = require('./User');
const Vote = require('./Vote');
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
  through: Vote,
  as: 'voted_quotes',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Quotes.belongsToMany(User, {
  through: Vote,
  as: 'voted_Quotes',
  foreignKey: 'quotes_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(Quotes, {
  foreignKey: 'quotes_id',
  onDelete: 'SET NULL'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Quotes.hasMany(Vote, {
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

module.exports = { User, Quotes, Vote, Comment };
