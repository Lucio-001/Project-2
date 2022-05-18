const router = require("express").Router();
const sequelize = require("../config/connection.js");
const { Quotes, User, Comment, Upvote } = require("../models");

router.get("/", (req, res) => {
  console.log("======================");
  Quotes.findAll({
    attributes: [
      "id",
      "text",
      "author",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM upvote WHERE quotes.id = upvote.quotes_id)"
        ),
        "upvote_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "quotes_id", "user_id"],
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

router.get("/quotes/:id", (req, res) => {
  Quotes.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "quotes_id",
      "author",
      "text",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM upvote WHERE quotes.id = upvote.quotes_id)"
        ),
        "upvote_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "quotes_id", "user_id"],
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