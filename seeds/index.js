const seedUsers = require("./user-seeds");
const seedComments = require("./comment-seeds");
const seedLikes = require("./like-seeds");
const seedQuotes = require("./quotes-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedComments();
  console.log("--------------");

  await seedLikes();
  console.log("--------------");

  await seedQuotes();
  console.log("--------------");

  process.exit(0);
};

seedAll();
