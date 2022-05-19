const { ThumbsUp } = require("../models");

const likedata = [
  {
    user_id: 9,
    quote_id: 19,
  },
  {
    user_id: 1,
    quote_id: 8,
  },
  {
    user_id: 8,
    quote_id: 12,
  },
  {
    user_id: 8,
    quote_id: 19,
  },
  {
    user_id: 9,
    quote_id: 3,
  },
  {
    user_id: 3,
    quote_id: 16,
  },
  {
    user_id: 4,
    quote_id: 7,
  },
  {
    user_id: 10,
    quote_id: 7,
  },
  {
    user_id: 3,
    quote_id: 18,
  },
  {
    user_id: 9,
    quote_id: 16,
  },
  {
    user_id: 3,
    quote_id: 17,
  },
  {
    user_id: 10,
    quote_id: 2,
  },
  {
    user_id: 6,
    quote_id: 10,
  },
  {
    user_id: 5,
    quote_id: 11,
  },
  {
    user_id: 6,
    quote_id: 1,
  },
  {
    user_id: 9,
    quote_id: 18,
  },
  {
    user_id: 6,
    quote_id: 15,
  },
  {
    user_id: 6,
    quote_id: 7,
  },
  {
    user_id: 6,
    quote_id: 4,
  },
  {
    user_id: 1,
    quote_id: 16,
  },
  {
    user_id: 10,
    quote_id: 18,
  },
  {
    user_id: 4,
    quote_id: 10,
  },
  {
    user_id: 10,
    quote_id: 5,
  },
  {
    user_id: 5,
    quote_id: 16,
  },
  {
    user_id: 6,
    quote_id: 17,
  },
  {
    user_id: 1,
    quote_id: 15,
  },
  {
    user_id: 7,
    quote_id: 13,
  },
  {
    user_id: 6,
    quote_id: 3,
  },
  {
    user_id: 6,
    quote_id: 13,
  },
  {
    user_id: 7,
    quote_id: 1,
  },
  {
    user_id: 4,
    quote_id: 15,
  },
  {
    user_id: 2,
    quote_id: 18,
  },
  {
    user_id: 9,
    quote_id: 10,
  },
  {
    user_id: 10,
    quote_id: 15,
  },
  {
    user_id: 8,
    quote_id: 1,
  },
  {
    user_id: 10,
    quote_id: 8,
  },
  {
    user_id: 2,
    quote_id: 13,
  },
  {
    user_id: 9,
    quote_id: 20,
  },
  {
    user_id: 1,
    quote_id: 17,
  },
  {
    user_id: 10,
    quote_id: 9,
  },
  {
    user_id: 10,
    quote_id: 3,
  },
  {
    user_id: 5,
    quote_id: 6,
  },
  {
    user_id: 6,
    quote_id: 12,
  },
  {
    user_id: 5,
    quote_id: 2,
  },
  {
    user_id: 6,
    quote_id: 14,
  },
  {
    user_id: 8,
    quote_id: 18,
  },
  {
    user_id: 3,
    quote_id: 4,
  },
];

const seedLikes = () => ThumbsUp.bulkCreate(likedata);

module.exports = seedLikes;
