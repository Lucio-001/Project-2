const router = require("express").Router();
const sequelize = require("../config/connection.js");
const { Quote, User, Comment, ThumbsUp } = require("../models");

router.get("/", (req, res) => {
  console.log("======================");
  Quote.findAll({
    attributes: [
      "id",
      "text",
      "author",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM thumbsUp WHERE quote.id = thumbsUp.quote_id)"
        ),
        "thumbsUp_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "quote_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbQuotesData) => {
      const quotes = dbQuotesData.map((quotes) => quotes.get({ plain: true }));

      res.render("homepage", {
        quotes,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/quote/:id", (req, res) => {
  Quote.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "quote_id",
      "author",
      "text",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM thumbsUp WHERE quote.id = thumbsUp.quote_id)"
        ),
        "thumbsUp_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "quote_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbQuotesData) => {
      if (!dbQuotesData) {
        res.status(404).json({ message: "No quotes found with this id" });
        return;
      }

      const quotes = dbQuotesData.get({ plain: true });

      res.render("single-quotes", {
        quotes,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
