const { Quotes } = require('../models');

const quotesdata = [
    {
      text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison",
      user_id: 1
    },
    {
      text: "You can observe a lot just by watching.",
      author: "Yogi Berra",
      user_id: 2
    },
    {
      text: "A house divided against itself cannot stand.",
      author: "Abraham Lincoln",
      user_id: 3
    },
    {
      text: "Difficulties increase the nearer we get to the goal.",
      author: "Johann Wolfgang von Goethe",
      user_id: 4
    },
    {
      text: "Fate is in your hands and no one elses",
      author: "Byron Pulsifer",
      user_id: 5
    },
    {
      text: "Be the chief but never the lord.",
      author: "Lao Tzu",
      user_id: 6
    },
    {
      text: "Nothing happens unless first we dream.",
      author: "Carl Sandburg",
      user_id: 7
    },
    {
      text: "Well begun is half done.",
      author: "Aristotle",
      user_id: 8
    },
    {
      text: "Life is a learning experience, only if you learn.",
      author: "Yogi Berra",
      user_id: 9
    },
    {
      text: "Self-complacency is fatal to progress.",
      author: "Margaret Sangster",
      user_id: 10
    },
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha",
      user_id: 11
    },
    {
      text: "What you give is what you get.",
      author: "Byron Pulsifer",
      user_id: 12
    },
    {
      text: "We can only learn to love by loving.",
      author: "Iris Murdoch",
      user_id: 13
    },
    {
      text: "Life is change. Growth is optional. Choose wisely.",
      author: "Karen Clark",
      user_id: 14
    },
    {
      text: "You'll see it when you believe it.",
      author: "Wayne Dyer",
      user_id: 15
    },
    {
      text: "Today is the tomorrow we worried about yesterday.",
      author: null,
      user_id: 16
    },
    {
      text: "It's easier to see the mistakes on someone else's paper.",
      author: null,
      user_id: 17
    },
    {
      text: "Every man dies. Not every man really lives.",
      author: null,
      user_id: 18
    },
    {
      text: "To lead people walk behind them.",
      author: "Lao Tzu",
      user_id: 19
    },
    {
      text: "Having nothing, nothing can he lose.",
      author: "William Shakespeare",
      user_id: 20
    }
]

const seedQuotes = () => Quotes.bulkCreate(quotesdata);

module.exports = seedQuotes;