const { Upvote } = require('../models');

const upvotedata = [
  {
    user_id: 9,
    quotes_id: 19
  },
  {
    user_id: 1,
    quotes_id: 8
  },
  {
    user_id: 8,
    quotes_id: 12
  },
  {
    user_id: 8,
    quotes_id: 19
  },
  {
    user_id: 9,
    quotes_id: 3
  },
  {
    user_id: 3,
    quotes_id: 16
  },
  {
    user_id: 4,
    quotes_id: 7
  },
  {
    user_id: 10,
    quotes_id: 7
  },
  {
    user_id: 3,
    quotes_id: 18
  },
  {
    user_id: 9,
    quotes_id: 16
  },
  {
    user_id: 3,
    quotes_id: 17
  },
  {
    user_id: 10,
    quotes_id: 2
  },
  {
    user_id: 6,
    quotes_id: 10
  },
  {
    user_id: 5,
    quotes_id: 11
  },
  {
    user_id: 6,
    quotes_id: 1
  },
  {
    user_id: 9,
    quotes_id: 18
  },
  {
    user_id: 6,
    quotes_id: 15
  },
  {
    user_id: 6,
    quotes_id: 7
  },
  {
    user_id: 6,
    quotes_id: 4
  },
  {
    user_id: 1,
    quotes_id: 16
  },
  {
    user_id: 10,
    quotes_id: 18
  },
  {
    user_id: 4,
    quotes_id: 10
  },
  {
    user_id: 10,
    quotes_id: 5
  },
  {
    user_id: 5,
    quotes_id: 16
  },
  {
    user_id: 6,
    quotes_id: 17
  },
  {
    user_id: 1,
    quotes_id: 15
  },
  {
    user_id: 7,
    quotes_id: 13
  },
  {
    user_id: 6,
    quotes_id: 3
  },
  {
    user_id: 6,
    quotes_id: 13
  },
  {
    user_id: 7,
    quotes_id: 1
  },
  {
    user_id: 4,
    quotes_id: 15
  },
  {
    user_id: 2,
    quotes_id: 18
  },
  {
    user_id: 9,
    quotes_id: 10
  },
  {
    user_id: 10,
    quotes_id: 15
  },
  {
    user_id: 8,
    quotes_id: 1
  },
  {
    user_id: 10,
    quotes_id: 8
  },
  {
    user_id: 2,
    quotes_id: 13
  },
  {
    user_id: 9,
    quotes_id: 20
  },
  {
    user_id: 1,
    quotes_id: 17
  },
  {
    user_id: 10,
    quotes_id: 9
  },
  {
    user_id: 10,
    quotes_id: 3
  },
  {
    user_id: 5,
    quotes_id: 6
  },
  {
    user_id: 6,
    quotes_id: 12
  },
  {
    user_id: 5,
    quotes_id: 2
  },
  {
    user_id: 6,
    quotes_id: 14
  },
  {
    user_id: 8,
    quotes_id: 18
  },
  {
    user_id: 3,
    quotes_id: 4
  }
];

const seedUpvotes = () => Upvote.bulkCreate(upvotedata);

module.exports = seedUpvotes;
