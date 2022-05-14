const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');
const seedVotes = require('./vote-seeds');
const seedQuotes = require('./quotes-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  await seedVotes();
  console.log('--------------');

  await seedQuotes();
  console.log('--------------');

  process.exit(0);
};

seedAll();